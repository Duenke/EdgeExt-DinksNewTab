<script lang="ts">
	import type { BookmarkTreeNode } from "$lib/types/ChromeTypes"
	import BookmarkList from "$lib/components/BookmarkList.svelte"

	export let folderData: BookmarkTreeNode

	let bookmarkData: BookmarkTreeNode[] = folderData.children!.filter((child) => child.url)
</script>

{#if folderData.title || bookmarkData.length > 0}
	<div class="card card-bordered w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">{folderData.title}</h2>
			<div class="card-accent"></div>
			<BookmarkList bookmarkData="{bookmarkData}" />
		</div>
	</div>
{/if}

<style>
	.card-accent {
		height: 3px;
		border-radius: 2px;
		background: linear-gradient(to left, hsl(322, 85%, 46%), hsl(200, 100%, 40%));
	}
</style>
