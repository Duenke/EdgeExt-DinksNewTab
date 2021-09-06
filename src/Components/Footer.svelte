<script lang="ts">
    import { theme } from "../Stores/ThemeStore";
    import { ThemeSelections } from "../Types/ThemeTypes";
</script>

<footer>
    <a href="https://github.com/Duenke/EdgeExt-DinksNewTab">
        <img
            src={$theme.themeName == ThemeSelections.LightTheme
                ? "GitHub-Mark-32px.png"
                : "GitHub-Mark-Light-32px.png"}
            alt="GitHub link"
        />
    </a>
</footer>

<style>
	footer {
		z-index: 1;
		position: fixed;
		left: 0;
		bottom: 0;
		min-height: 5vh;
		min-width: 100vw;
		display: flex;
		align-items: center;
        justify-content: right;
		background-color: var(--theme-accentColor1);
		border-top: 2px solid var(--theme-borderColor);
	}

    img {
        padding-right: 1rem;
    }
</style>