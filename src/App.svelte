<script lang="ts">
	import browser from "webextension-polyfill";
	import { onMount } from "svelte";

	import { theme } from "./Stores/ThemeStore";
	import { sort } from "./Stores/SortStore";
	import { font, header } from "./Stores/FontStore";

	import { SortKey } from "./Types/SortTypes";
	import { ThemeKey } from "./Types/ThemeTypes";
	import { FontKey, HeaderKey } from "./Types/FontTypes";
	import type { BookmarkTreeNode, mockTopLevelNodeTree } from "./Types/ChromeTypes";

	import SettingsPanel from "./Components/SettingsPanel.svelte";
	import Header from "./Components/Header.svelte";
	import FolderCard from "./Components/FolderCard.svelte";
	import Footer from "./Components/Footer.svelte";

	let isModalOpen: boolean = false;
	let folderNodeDataPromise: Promise<BookmarkTreeNode[]>;

	$: {
		$sort.sortName;
		folderNodeDataPromise = getBrowserData();
	}

	async function getBrowserData(): Promise<BookmarkTreeNode[]> {
		// const topLevelNodeTree: BookmarkTreeNode[] = await Promise.resolve(
		// 	mockTopLevelNodeTree
		// );
		const topLevelNodeTree: BookmarkTreeNode[] =
			await browser.bookmarks.getTree();

		let folderNodes: BookmarkTreeNode[] = getFoldersFromNodeTree(
			topLevelNodeTree[0]
		);

		folderNodes = $sort.sortFunction(folderNodes);

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

	onMount(() => {
		browser.storage.local
        .get(SortKey)
        .then((data) => {
            sort.setSortSelection(data[SortKey]);
        })
        .catch((error) => {
            console.error(error.message);
        });

		browser.storage.local
        .get(ThemeKey)
        .then((data) => {
            theme.setThemeSelection(data[ThemeKey]);
        })
        .catch((error) => {
            console.error(error.message);
        });

		browser.storage.local
        .get(FontKey)
        .then((data) => {
            font.set(data[FontKey]);
        })
        .catch((error) => {
            console.error(error.message);
        });

		browser.storage.local
        .get(HeaderKey)
        .then((data) => {
            header.set(data[HeaderKey]);
        })
        .catch((error) => {
            console.error(error.message);
        });
	})
</script>

<div
	class="theme-container"
	style="
	--theme-accentColor1: {$theme.accentColor1};
	--theme-backgroundColor: {$theme.backgroundColor};
	--theme-boxShadowColor: {$theme.boxShadowColor};
	--theme-borderColor: {$theme.borderColor};
	--theme-fontColor1: {$theme.fontColor1};
	--font-size: {$font}rem;
	--header-size: {$header}rem;
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
