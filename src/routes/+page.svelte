<script lang="ts">
	import Debugger from "$lib/components/Debugger.svelte"
	import FolderCard from "$lib/components/FolderCard.svelte"
	import { getBrowserData } from "$lib/functions/ChromeApis"
	import type { BookmarkTreeNode } from "$lib/types/ChromeTypes"

	let folderNodeDataPromise: Promise<BookmarkTreeNode[]>

	$: {
		// $sort.sortName;
		folderNodeDataPromise = getBrowserData()
	}
</script>

<Debugger />

<!-- <div class="h-screen w-screen bg-slate-200">
	<main class="flex flex-wrap items-center gap-1">
		{#await folderNodeDataPromise}
			<p>im getting out of shape...</p>
		{:then folderNodeData}
			{#each folderNodeData as folderData}
				{#if folderData.children?.length && folderData.children?.length > 0}
					<FolderCard folderData="{folderData}" />
				{/if}
			{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</main>
</div> -->
