<script lang="ts">
	import { getBrowserData } from "$lib/functions/ChromeApis"
	import type { BookmarkTreeNode } from "$lib/types/ChromeTypes"
	import type { FolderOption } from "$lib/types/MyTypes"
	import FolderOptions from "./FolderOptions.svelte"

	export let sectionId: string
	// export let selectedFolders: FolderOption[]
	export let isOpen: boolean

	let folderNodeDataPromise: Promise<BookmarkTreeNode[]>
	$: folderNodeDataPromise = getBrowserData()
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="radio" name="custom_sections_radio" checked="{isOpen}" />
	<div class="collapse-title text-xl font-medium">
		{sectionId}
	</div>
	<div class="collapse-content">
		{#await folderNodeDataPromise}
			<p>im getting out of shape...</p>
		{:then folderNodeData}
			{#each folderNodeData as folderData}
				<FolderOptions folderName="{folderData.title}" checked="{true}" />
			{/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
</div>

<!-- <div class="collapse collapse-arrow bg-base-200">
	<input type="radio" name="custom_sections_radio" checked="{isOpen}" />
	<div class="collapse-title text-xl font-medium">
		{sectionId}
	</div>
	<div class="collapse-content">
		{#each selectedFolders as folderData}
			<FolderOptions folderName="{folderData.Name}" checked="{folderData.IsSelected}" />
		{/each}
	</div>
</div> -->
