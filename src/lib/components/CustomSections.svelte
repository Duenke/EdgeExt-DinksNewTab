<script lang="ts">
	import CardSectionOptions from "./CardSectionOptions.svelte"

	let customSections: string[] = []

	function addSection() {
		customSections.push(crypto.randomUUID())
		customSections = customSections
	}
</script>

{#each customSections as section, i}
	<CardSectionOptions sectionId="{section}" isOpen="{i === 0}" />
{/each}

<button class="btn" on:click="{addSection}">➕</button>
