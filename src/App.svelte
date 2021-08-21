<script lang="ts">
	import browser from "webextension-polyfill";

	import FolderCard from "./Components/FolderCard.svelte";
	import type { BookmarkTreeNode } from "./Types/ChromeTypes";
	import { mockTopLevelNodeTree } from "./Types/ChromeTypes";

	let folderNodeDataPromise: Promise<BookmarkTreeNode[]> = getBrowserData();

	async function getBrowserData(): Promise<BookmarkTreeNode[]> {
		// const topLevelNodeTree: BookmarkTreeNode[] = await Promise.resolve(mockTopLevelNodeTree);
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

<main class="card-container">
	<header class="header z-bar" />
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
	<footer class="footer z-bar" />
</main>

<style>
	.z-bar {
		z-index: -1;
		position: fixed;
		height: 5%;
		width: 100%;
		background-color: white;
	}
	.header {
		top: 0;
		border-bottom: 2px solid rgb(229, 229, 229);
	}

	.footer {
		bottom: 0;
		border-top: 2px solid rgb(229, 229, 229);
	}

	.card-container {
		display: flex;
		flex-flow: wrap;
		justify-content: center;
	}
</style>
