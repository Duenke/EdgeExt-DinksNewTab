<script lang="ts">
	// redundant with the label method from DaisyUI. Decide later.
	export let checked: boolean = false
	let numberOfCustomRows: number = 0
	let numberOfCardsPerRow: number = 0
	let alignmentAutoRows: string = "left"
	let autoCardWidth: number = 0
	let splitCard: boolean = false
</script>

<div class="drawer">
	<input id="my-drawer" type="checkbox" bind:checked="{checked}" class="drawer-toggle" />
	<div class="drawer-content">
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer" class="drawer-overlay"></label>
		<!-- figure out if this UL is required. -->
		<div class="p-4 w-fit max-w-screen-sm min-h-full bg-base-200 text-base-content">
			<h1 class="text-2xl font-bold">Settings</h1>

			<h2 class="text-lg font-bold">Custom Rows</h2>

			<label class="flex place-items-center gap-1">
				<span>Number of custom rows: </span>
				<input type="range" bind:value="{numberOfCustomRows}" min="0" max="10" class="input input-bordered" />
			</label>

			{#each Array(numberOfCustomRows) as _, i (i)}
				<!-- This will be where folders can be assigned to custom rows. -->
				<p>#{i + 1} row</p>
			{/each}

			<h2 class="text-lg font-bold">Auto Rows</h2>

			<label class="flex place-items-center gap-1">
				<span>Number of cards per row: </span>
				<input type="range" bind:value="{numberOfCardsPerRow}" min="0" max="10" class="input input-bordered" />
			</label>

			<p>{numberOfCardsPerRow}</p>

			<label class="flex place-items-center gap-1">
				<span>Alignment: </span>
				<select bind:value="{alignmentAutoRows}" class="select select-bordered">
					<option>Left</option>
					<option>Center</option>
					<option>Right</option>
				</select>
			</label>

			<p>{alignmentAutoRows}</p>

			<label class="flex place-items-center gap-1">
				<span>Width: </span>
				<input type="range" bind:value="{autoCardWidth}" min="0" max="10" class="input input-bordered" />
			</label>

			<p>{autoCardWidth}</p>

			<h2 class="text-lg font-bold">Custom Card Options</h2>

			<label class="flex place-items-center gap-1">
				<span>Split: </span>
				<input type="checkbox" bind:checked="{splitCard}" class="input input-bordered" />
			</label>

			<p>{splitCard}</p>
		</div>
	</div>
</div>
