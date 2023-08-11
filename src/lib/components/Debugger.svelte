<script lang="ts">
	import { onMount } from "svelte"

	let bookmarks: any[]
	console.log("Debugger Component Loaded")

	onMount(async () => {
		const bookmarks = await chrome.bookmarks.getTree()
		console.log("Debugger Component Mounted")
	})
</script>

<dialog class="modal modal-open">
	<form
		method="dialog"
		class="modal-box w-11/12 max-w-5xl"
	>
		<h3 class="font-bold text-lg">Debugger Component</h3>
		<pre class="prose">{JSON.stringify(bookmarks, null, 2)}</pre>
	</form>
</dialog>
