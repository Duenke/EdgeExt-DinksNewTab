<script lang="ts">
    import { font, header } from "../Stores/FontStore";
</script>

<h2>Choose font size options:</h2>
<section class="font-selection">
    <label>
        Header size: <strong>{$header}</strong> <br />
        <input type="range" bind:value={$header} min="1" max="5" step=".25" />
    </label>

    <label>
        Font size: <strong>{$font}</strong> <br />
        <input type="range" bind:value={$font} min="1" max="5" step=".25" />
    </label>
</section>

<style>
    h2 {
        font-size: var(--font-size);
    }
    
    .font-selection {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem;
        border-radius: 0.75rem;
        font-size: var(--font-size);
        background-color: var(--theme-backgroundColor);
        border: 2px solid var(--theme-borderColor);
        box-shadow: inset 0 0 4px var(--theme-boxShadowColor);
    }
</style>
