<script lang="ts">
    import { theme } from "../Stores/ThemeStore";
    import { ThemeSelections } from "../Types/ThemeTypes";

    export let isModalOpen: boolean;
</script>

<header>
    <img on:click={() => {isModalOpen = true}}
    src={$theme.themeName == ThemeSelections.LightTheme
        ? "dark_gear.png"
        : "light_gear.png"}
        alt="Settings Panel" 
    height="32px" width="32px" />
</header>

<style>
	header {
		z-index: 1;
		position: fixed;
		top: 0;
		left: 0;
		min-height: 5vh;
		min-width: 100vw;
		display: flex;
		align-items: center;
        justify-content: right;
		background-color: var(--theme-accentColor1);
		border-bottom: 2px solid var(--theme-borderColor);
	}

    img {
        padding-right: 1rem;
    }
</style>