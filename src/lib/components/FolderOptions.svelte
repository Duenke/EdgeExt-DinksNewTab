<script lang="ts">
	export let folderName: string
	export let checked: boolean
	// export let folderOptions: FolderOptions
</script>

<div class="flex place-items-center gap-1">
	<input type="checkbox" checked="{checked}" class="checkbox" />
	<p class="font-bold">{folderName}</p>
</div>
