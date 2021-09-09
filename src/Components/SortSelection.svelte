<script lang="ts">
    import { sort } from "../Stores/SortStore";
    import { SortSelections } from "../Types/SortTypes";

    let sortSelection: SortSelections = $sort.sortName;
    const sortSelections: SortSelections[] = [
        SortSelections["Default"],
        SortSelections["SystemFoldersLast"],
        SortSelections["0 -> Z"],
        SortSelections["Z -> 0"],
        SortSelections["New -> Old"],
        SortSelections["Old -> New"],
        // TODO: SortSelections["Custom"]
    ];

    $: sort.setSortSelection(sortSelection);
</script>

<h2>Choose a sort option:</h2>
<section class="sort-selection">
    {#each sortSelections as sort}
        <label>
            <input type="radio" bind:group={sortSelection} value={sort} />
            {SortSelections[sort]}
        </label>
    {/each}
</section>

<style>
    .sort-selection {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        padding: .5rem;
        border-radius: .75rem;
        background-color: var(--theme-backgroundColor);
        border: 2px solid var(--theme-borderColor);
        box-shadow: inset 0 0 4px var(--theme-boxShadowColor);
    }

    label {
        font-size: var(--font-size);
    }

    input {
        transform: scale(2);
    }
</style>
