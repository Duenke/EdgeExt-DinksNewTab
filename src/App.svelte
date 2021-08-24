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

<header
	class="header z-bar"
	style="background-color: {$theme.accentColor1};
			border-bottom: 2px solid {$theme.borderColor};"
>
	<DarkmodeToggle />
</header>
<main
	class="card-container"
	style="background-color: {$theme.backgroundColor};"
>
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
<footer
	class="footer z-bar"
	style="background-color: {$theme.accentColor1};
			border-top: 2px solid {$theme.borderColor};"
>
	<a href="https://github.com/Duenke/EdgeExt-DinksNewTab">
		<img src="GitHub-Mark-32px.png" alt="GitHub link" />
	</a>
</footer>

<style>
	.z-bar {
		z-index: 0;
		position: fixed;
		left: 0;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		height: 5%;
		width: 100%;
	}
	.header {
		top: 0;
	}

	.footer {
		bottom: 0;
	}

	.card-container {
		z-index: -1;
		display: flex;
		flex-flow: wrap;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
</style>
