<script lang="ts">
	import Debugger from "$lib/components/Debugger.svelte"
	import FolderCard from "$lib/components/FolderCard.svelte"
	import SettingsOverlay from "$lib/components/SettingsOverlay.svelte"
	import { getBrowserData } from "$lib/functions/ChromeApis"
	import type { BookmarkTreeNode } from "$lib/types/ChromeTypes"

	let folderNodeDataPromise: Promise<BookmarkTreeNode[]>
	// redundant with the label method from DaisyUI. Decide later.
	let settginsPanelOpen: boolean = false

	$: {
		// $sort.sortName;
		folderNodeDataPromise = getBrowserData()
	}
</script>

<!-- <Debugger /> -->

<div class="w-full mx-auto bg-slate-200">
	<SettingsOverlay checked="{settginsPanelOpen}">
		<label for="my-drawer" class="btn drawer-button">⚙️</label>
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
	</SettingsOverlay>
</div>
