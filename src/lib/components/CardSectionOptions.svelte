<script lang="ts">
	import { getBrowserData } from "$lib/functions/ChromeApis"
	import type { BookmarkTreeNode } from "$lib/types/ChromeTypes"

	export let sectionId: string
	export let isOpen: boolean

	let folderNodeDataPromise: Promise<BookmarkTreeNode[]>
	$: folderNodeDataPromise = getBrowserData()

	let cardList: string[] = []
	function addCard(event: any) {
		// console.log({ event })
		cardList.push(event.target.value)
		cardList = cardList
		console.log({ sectionId, cardList })
	}
</script>

<div class="collapse collapse-arrow bg-base-200">
	<input type="radio" name="my-accordion-2" checked="{isOpen}" />
	<div class="collapse-title text-xl font-medium">
		{sectionId}
	</div>
	<div class="collapse-content">
		{#each cardList as card}
			<p>{card}</p>
		{/each}

		<label class="flex place-items-center gap-1">
			<span>add a card: </span>
			<select on:change="{addCard}" class="select select-bordered">
				<option selected disabled hidden>select a card</option>

				{#await folderNodeDataPromise}
					<option></option>
				{:then folderNodeData}
					{#each folderNodeData as folderData}
						<option>{folderData.title}</option>
					{/each}
				{:catch error}
					<p style="color: red">{error.message}</p>
				{/await}
			</select>
		</label>
	</div>
</div>
