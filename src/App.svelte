<script lang="ts">
	// import browser from "webextension-polyfill";

	import { mockTopLevelNodeTree } from "./Types/ChromeTypes";
	import { theme } from "./Stores/ThemeStore";
	import SettingsPanel from "./Components/SettingsPanel.svelte";
	import Header from "./Components/Header.svelte";
	import FolderCard from "./Components/FolderCard.svelte";
	import Footer from "./Components/Footer.svelte";
	import type { BookmarkTreeNode } from "./Types/ChromeTypes";

	let folderNodeDataPromise: Promise<BookmarkTreeNode[]> = getBrowserData();
	let isModalOpen: boolean = false;

	async function getBrowserData(): Promise<BookmarkTreeNode[]> {
		const topLevelNodeTree: BookmarkTreeNode[] = await Promise.resolve(
			mockTopLevelNodeTree
		);
		// const topLevelNodeTree: BookmarkTreeNode[] =
		// 	await browser.bookmarks.getTree();

		let folderNodes: BookmarkTreeNode[] = getFoldersFromNodeTree(
			topLevelNodeTree[0]
		);

		// I want to move system folders to the end.
		[
			"Favorites bar",
			"Other favorites",
			"Reading List Saves",
			"Mobile favorites",
		].forEach((systemNode) => {
			const index = folderNodes.findIndex(
				(node) => node.title == systemNode
			);
			const holder = folderNodes.splice(index, 1);
			folderNodes = [...folderNodes, ...holder];
		});

		return folderNodes;
	}

	function getFoldersFromNodeTree(nodeTree: BookmarkTreeNode): BookmarkTreeNode[] {
		const thisNodesBookmarks: BookmarkTreeNode[] = nodeTree.children.filter(
			(node) => node.url
		);
		const thisNodeWithJustBookmarks: BookmarkTreeNode = {
			...nodeTree,
			children: thisNodesBookmarks,
		};

		const thisNodesFolders: BookmarkTreeNode[] = nodeTree.children.filter(
			(node) => !node.url
		);
		const nestedNodeTrees: BookmarkTreeNode[] = thisNodesFolders.flatMap(
			(folder) => getFoldersFromNodeTree(folder)
		);

		return [thisNodeWithJustBookmarks, ...nestedNodeTrees];
	}
</script>

<div
	class="theme-container"
	style="
	--theme-accentColor1: {$theme.accentColor1};
	--theme-backgroundColor: {$theme.backgroundColor};
	--theme-boxShadowColor: {$theme.boxShadowColor};
	--theme-borderColor: {$theme.borderColor};
	--theme-fontColor1: {$theme.fontColor1};
"
>
	<SettingsPanel bind:isModalOpen />

	<Header bind:isModalOpen />
	<main class="card-container">
		{#await folderNodeDataPromise}
			<p>im getting out of shape...</p>
		{:then folderNodeData}
			{#each folderNodeData as folderData}
				{#if folderData.children?.length > 0}
					<FolderCard {folderData} />
				{/if}
			{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</main>
	<Footer />
</div>

<style>
	.theme-container {
		min-height: 100vh;
		min-width: 100vw;
		background-color: var(--theme-backgroundColor);
	}

	.card-container {
		display: flex;
		flex-flow: wrap;
		justify-content: center;
	}
</style>
