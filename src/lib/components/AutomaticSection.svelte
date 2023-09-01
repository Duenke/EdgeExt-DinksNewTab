<script lang="ts">
	let numberOfCardsPerRow: number = 0
</script>

<h2 class="text-lg font-bold pt-2">Automatic Section</h2>

<label class="flex place-items-center gap-1">
	<span>Number of cards per row: </span>
	<input type="range" bind:value="{numberOfCardsPerRow}" min="0" max="10" class="input input-bordered" />
</label>

<p>{numberOfCardsPerRow}</p>
