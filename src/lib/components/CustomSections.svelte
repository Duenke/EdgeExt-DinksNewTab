<script lang="ts">
	import { onMount } from "svelte"
	import CustomSectionOptions from "./CustomSectionOptions.svelte"

	let customSections: string[] = []
	// let customSectionsPromise: Promise<CustomSection[]> = getCustomSections()

	async function getCustomSections() {
		const response = await chrome.storage.local.get("customSections")
		console.log({ response })
		console.log({ "response.json": response.json })
		return response.customSections || []
	}

	function addSection() {
		customSections.push(crypto.randomUUID())
		customSections = customSections
	}
	onMount(() => {
		addSection()
		addSection()
		addSection()
	})
</script>

<h2 class="text-lg font-bold pt-2">Custom Sections</h2>

{#each customSections as section, i}
	<CustomSectionOptions sectionId="{section}" isOpen="{i === 0}" />
{/each}

<!-- {#await customSectionsPromise}
	<p>im getting out of shape...</p>
{:then customSections}
	{#each customSections as section, i}
		<CustomSectionOptions sectionId="{section.Name}" selectedFolders="{section.SelectedFolders}" isOpen="{i === 0}" />
	{/each}
{/await} -->

<button class="btn" on:click="{addSection}">➕</button>
