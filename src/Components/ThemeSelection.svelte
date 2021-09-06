<script lang="ts">
    // import browser from "webextension-polyfill";
    
    import { theme } from "../Stores/ThemeStore";
    import { ThemeKey, ThemeSelections } from "../Types/ThemeTypes";

    let themeSelection: ThemeSelections = $theme.themeName;
    const themeKey: string = ThemeKey;
    const themeSelections: ThemeSelections[] = [
        ThemeSelections.LightTheme,
        ThemeSelections.DarkTheme,
        ThemeSelections.HighContrastTheme,
    ];

    // browser.storage.local
    //     .get(key)
    //     .then((data) => {
    //         themeSelection = data[themeKey];
    //     })
    //     .catch((error) => {
    //         console.error(error.message);
    //     });

    $: theme.setThemeSelection(themeSelection);
</script>

<h2>Choose a theme:</h2>
{#each themeSelections as theme}
    <label>
        <input type=radio bind:group={themeSelection} value={theme}>
        {ThemeSelections[theme]}
    </label>
{/each}

<style>
    label {
        font-size: 1.5rem;
    }

    input {
        transform: scale(2);
    }
</style>