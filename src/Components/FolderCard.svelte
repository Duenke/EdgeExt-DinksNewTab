<script lang="ts">
    import { theme } from "../Stores/ThemeStore";
    import type { BookmarkTreeNode } from "../Types/ChromeTypes";
    import BookmarkList from "./BookmarkList.svelte";

    export let folderData: BookmarkTreeNode;

    let bookmarkData: BookmarkTreeNode[] = folderData.children.filter(
        (child) => child.url
    );
</script>

<article class="card" style="background-color: {$theme.accentColor1}; box-shadow: 0px 2px 4px {$theme.shadowColor};">
    <div class="card-title" style="border-bottom: 1px solid {$theme.borderColor};">{folderData.title}</div>
    <div class="card-body">
        <BookmarkList {bookmarkData} />
    </div>
    <div class="card-accent" />
</article>

<style>
    .card {
        z-index: 1;
        display: flex;
        flex-direction: column;
        width: 20%;
        min-width: 20em;
        margin: 1em;
        border-radius: 2px;
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
