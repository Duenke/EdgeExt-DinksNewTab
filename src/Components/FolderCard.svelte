<script lang="ts">
    import type { BookmarkTreeNode } from "../Types/ChromeTypes";
    import BookmarkList from "./BookmarkList.svelte";

    export let folderData: BookmarkTreeNode;

    let bookmarkData: BookmarkTreeNode[] = folderData.children.filter(
        (child) => child.url
    );
</script>

<article class="card">
    <div class="card-title">{folderData.title}</div>
    <div class="card-body">
        <BookmarkList {bookmarkData} />
    </div>
    <div class="card-accent" />
</article>

<style>
    .card {
        display: flex;
        flex-direction: column;
        width: 20%;
        min-width: 20em;
        margin: 1em;
        background: rgb(255, 255, 255);
        border-radius: 2px;
        box-shadow: 0px 2px 4px rgb(0 0 0 / 13%);
        transition: all 0.2s ease-in-out;
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: 0px 2px 8px rgb(0 0 0 / 13%);
    }

    .card-title {
        padding: 0.2em 0.5em;
        font-size: 2em;
        background: linear-gradient(
            to left,
            rgb(216, 17, 143),
            rgb(0, 120, 212)
        );
        border-bottom: 1px solid rgb(229, 229, 229);
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
