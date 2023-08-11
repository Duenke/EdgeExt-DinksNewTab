<script lang="ts">
	console.log("Debugger Component Loaded")

	import { getBrowserData } from "$lib/functions/ChromeApis"
	import type { BookmarkTreeNode } from "$lib/types/ChromeTypes"

	let folderNodeDataPromise: Promise<BookmarkTreeNode[]>

	$: {
		// $sort.sortName;
		folderNodeDataPromise = getBrowserData()
	}
</script>

<dialog class="modal modal-open">
	<form
		method="dialog"
		class="modal-box w-11/12 max-w-5xl"
	>
		<h3 class="font-bold text-lg">Debugger Component</h3>
		{#await folderNodeDataPromise}
			loading debugger data...
		{:then data}
			<pre class="prose">{JSON.stringify(data, null, 2)}</pre>
		{/await}
	</form>
</dialog>
