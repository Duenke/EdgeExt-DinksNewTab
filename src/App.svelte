<script lang="ts">
	import FolderCard from "./Components/FolderCard.svelte";
	import type { BookmarkTreeNode } from "./Types/ChromeTypes";
	import browser from "webextension-polyfill";

	let bookmarkNodesData: Promise<BookmarkTreeNode[]> = getBrowserData();

	async function getBrowserData(): Promise<BookmarkTreeNode[]> {
		const topLevelNodeTree = await browser.bookmarks.getTree();

		const folderNodes: BookmarkTreeNode[] = 
			getBookmarksFromNodeTree(topLevelNodeTree);

		return folderNodes;
	}
		
	function getBookmarksFromNodeTree(
		nodeTree: BookmarkTreeNode[]
	): BookmarkTreeNode[] {
		const folderNodes = nodeTree.filter((node) => !node.url);
		const nestedFolderNodes = folderNodes.flatMap((node) =>
			node.children.filter((node) => !node.url)
		);

		return nestedFolderNodes.length > 0
			? getBookmarksFromNodeTree(nestedFolderNodes)
			: folderNodes;
	}
</script>

<main class="card-container">
	<header class="header-bar" />
	{#await bookmarkNodesData}
		im getting out of shape...
	{:then nodesData}
		{#each nodesData as folder}
			{#if folder.children?.length > 0}
				<FolderCard folderNodeData={folder} />
			{/if}
		{/each}
	{/await}
	<footer class="footer-bar" />
</main>

<style>
	.header-bar {
		z-index: -1;
		position: fixed;
		top: 0;
		height: 5%;
		width: 100%;
		background-color: white;
		border-bottom: 2px solid rgb(229, 229, 229);
	}

	.footer-bar {
		z-index: -1;
		position: fixed;
		bottom: 0;
		height: 5%;
		width: 100%;
		background-color: white;
		border-top: 2px solid rgb(229, 229, 229);
	}

	.card-container {
		display: flex;
		flex-flow: wrap;
		justify-content: center;
	}
</style>
