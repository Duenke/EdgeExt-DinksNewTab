<script lang="ts">
	import FolderCard from "./Components/FolderCard.svelte";
	import type { BookmarkTreeNode } from "./Types/ChromeTypes";
	import { mockTopLevelNodeTree} from "./Types/ChromeTypes"
	import browser from "webextension-polyfill";

	let bookmarkNodesData: Promise<BookmarkTreeNode[]> = getBrowserData();

	async function getBrowserData(): Promise<BookmarkTreeNode[]> {
		// const topLevelNodeTree = await Promise.resolve(mockTopLevelNodeTree);
		const topLevelNodeTree = await browser.bookmarks.getTree();

		const folderNodes: BookmarkTreeNode[] = getBookmarksFromNodeTree(
			topLevelNodeTree[0]
		);

		return folderNodes;
	}

	function getBookmarksFromNodeTree(
		nodeTree: BookmarkTreeNode
	): BookmarkTreeNode[] {
		const thisNodesBookmarks = nodeTree.children.filter((node) => node.url);
		const thisNodeWithJustBookmarks = {
			...nodeTree,
			children: thisNodesBookmarks,
		};

		const thisNodesFolders = nodeTree.children.filter((node) => !node.url);
		const nestedNodeTrees = thisNodesFolders.flatMap((folder) =>
			getBookmarksFromNodeTree(folder)
		);

		return [thisNodeWithJustBookmarks, ...nestedNodeTrees];
	}
</script>

<main class="card-container">
	<header class="header z-bar" />
	{#await bookmarkNodesData}
		<p>im getting out of shape...</p>
	{:then nodesData}
		{#each nodesData as folder}
			{#if folder.children?.length > 0}
				<FolderCard folderNodeData={folder} />
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
