<script lang="ts">
    import { theme } from "../Stores/ThemeStore";
    import { ThemeKey, ThemeSelections } from "../Types/ThemeTypes";

    let themeSelection: ThemeSelections = $theme.themeName;
    const themeKey: string = ThemeKey;
    const themeSelections: ThemeSelections[] = [
        ThemeSelections.Light,
        ThemeSelections.Dark,
        ThemeSelections.HighContrast
    ];

    $: theme.setThemeSelection(themeSelection);
</script>

<h2>Choose a theme option:</h2>
<section class="theme-selection">
    {#each themeSelections as theme}
        <label>
            <input type="radio" bind:group={themeSelection} value={theme} />
            {ThemeSelections[theme]}
        </label>
    {/each}
</section>

<style>
    .theme-selection {
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
        font-size: 1.5rem;
    }

    input {
        transform: scale(2);
    }
</style>
