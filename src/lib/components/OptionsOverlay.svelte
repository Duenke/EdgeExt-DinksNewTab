<script lang="ts">
	import AutomaticSection from "./AutomaticSection.svelte"
	import CustomSections from "./CustomSections.svelte"
</script>

<div class="drawer">
	<input id="options-overlay-toggle" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- The entire page content is slotted into this OptionsOverlay component here. -->
		<slot />
	</div>
	<div class="drawer-side">
		<!-- Clicking on the dark overlay will also un-toggle the panel. -->
		<label for="options-overlay-toggle" class="drawer-overlay"></label>

		<div class="p-4 w-fit max-w-screen-sm min-h-full bg-base-200 text-base-content">
			<h1 class="text-2xl font-bold">Options</h1>

			<AutomaticSection />

			<CustomSections />
		</div>
	</div>
</div>
