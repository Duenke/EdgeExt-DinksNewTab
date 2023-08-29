<script lang="ts">
	import FolderCard from "$lib/components/FolderCard.svelte"
	import { getBrowserData } from "$lib/functions/ChromeApis"
	import type { BookmarkTreeNode } from "$lib/types/ChromeTypes"

	let folderNodeDataPromise: Promise<BookmarkTreeNode[]>

	$: {
		// $sort.sortName;
		folderNodeDataPromise = getBrowserData()
	}
</script>

<main class="flex flex-wrap place-content-center gap-1">
	{#await folderNodeDataPromise}
		<p>im getting out of shape...</p>
	{:then folderNodeData}
		{#each folderNodeData as folderData}
			<FolderCard folderData="{folderData}" />
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</main>
