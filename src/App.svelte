<script lang="ts">
	import browser from "webextension-polyfill";

	import { theme } from "./Stores/ThemeStore";
	import type { BookmarkTreeNode } from "./Types/ChromeTypes";
	import { mockTopLevelNodeTree } from "./Types/ChromeTypes";
	import DarkmodeToggle from "./Components/DarkmodeToggle.svelte";
	import FolderCard from "./Components/FolderCard.svelte";

	let folderNodeDataPromise: Promise<BookmarkTreeNode[]> = getBrowserData();

	async function getBrowserData(): Promise<BookmarkTreeNode[]> {
		// const topLevelNodeTree: BookmarkTreeNode[] = await Promise.resolve(
		// 	mockTopLevelNodeTree
		// );
		const topLevelNodeTree: BookmarkTreeNode[] =
			await browser.bookmarks.getTree();

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

	function getFoldersFromNodeTree(
		nodeTree: BookmarkTreeNode
	): BookmarkTreeNode[] {
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
	<header class="header z-bar">
		<DarkmodeToggle />
	</header>
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
	<footer class="footer z-bar">
		<a href="https://github.com/Duenke/EdgeExt-DinksNewTab">
			<img
				src={$theme.isDarkmodeToggled
					? "GitHub-Mark-Light-32px.png"
					: "GitHub-Mark-32px.png"}
				alt="GitHub link"
			/>
		</a>
	</footer>
</div>

<style>
	.z-bar {
		z-index: 1;
		position: fixed;
		left: 0;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		height: 5%;
		width: 100%;
		background-color: var(--theme-accentColor1);
	}
	.header {
		top: 0;
		border-bottom: 2px solid var(--theme-borderColor);
	}

	.footer {
		bottom: 0;
		border-top: 2px solid var(--theme-borderColor);
	}

	.card-container {
		display: flex;
		flex-flow: wrap;
		justify-content: center;
	}

	.theme-container {
		background-color: var(--theme-backgroundColor);
		min-height: 100%;
	}
</style>
