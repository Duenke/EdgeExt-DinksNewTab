<script lang="ts">
    import { theme } from "../Stores/ThemeStore";
    import type { BookmarkTreeNode } from "../Types/ChromeTypes";
    import BookmarkList from "./BookmarkList.svelte";

    export let folderData: BookmarkTreeNode;

    let bookmarkData: BookmarkTreeNode[] = folderData.children.filter(
        (child) => child.url
    );
</script>

<article class="card">
    <div class="card-title">
        {folderData.title}
    </div>
    <div class="card-body">
        <BookmarkList {bookmarkData} />
    </div>
    <div class="card-accent" />
</article>

<style>
    .card {
        z-index: 2;
        display: flex;
        flex-direction: column;
        width: 20%;
        min-width: 20em;
        margin: 1em;
        border-radius: 2px;
        box-shadow: 2px 2px 4px var(--theme-boxShadowColor);
        background-color: var(--theme-accentColor1);
        transition: all 0.2s ease-in-out;
    }

    .card:hover {
        transform: scale(1.05);
    }

    .card-title {
        padding: 0.2em 0.5em;
        font-size: 2em;
        background: linear-gradient(
            to left,
            rgb(216, 17, 143),
            rgb(0, 120, 212)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        border-bottom: 1px solid var(--theme-borderColor);
    }

    .card-body {
        flex-grow: 1;
        padding: 0 1em;
    }

    .card-accent {
        height: 3px;
        background: linear-gradient(
            to left,
            rgb(216, 17, 143),
            rgb(0, 120, 212)
        );
    }
</style>
