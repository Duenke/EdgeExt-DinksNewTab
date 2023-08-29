<script lang="ts">
	import Debugger from "$lib/components/Debugger.svelte"
	import MainContainter from "$lib/components/MainContainter.svelte"
	import OptionsOverlay from "$lib/components/OptionsOverlay.svelte"
</script>

<!-- <Debugger /> -->

<OptionsOverlay>
	<label for="options-overlay-toggle" class="btn drawer-button">⚙️</label>
	<MainContainter />
</OptionsOverlay>
