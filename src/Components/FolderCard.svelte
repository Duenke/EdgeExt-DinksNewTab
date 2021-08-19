<script lang="ts">
    import type { BookmarkTreeNode } from "../Types/ChromeTypes";

    export let folderNodeData: BookmarkTreeNode;

    let localBookmarks: BookmarkTreeNode[] = folderNodeData.children.filter(
        (child) => child.url
    );
</script>

<article class="card">
    <div class="card-title">{folderNodeData.title}</div>
    <div class="card-body">
        <ul class="bookmark-list">
            {#each localBookmarks as bookmark}
                <li class="bookmark-item"><a href={bookmark.url}>{bookmark.title}</a></li>
            {/each}
        </ul>
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
        box-shadow: rgb(0 0 0 / 13%) 0px 2px 4px;
        transition: all 0.2s ease-in-out;
    }

    .card:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 13%) 0px 2px 8px;
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

    .bookmark-list {
        display: contents;
        list-style: none;
    }

    .bookmark-list li::before {
        content: "\200B";
    }
    
    .bookmark-item {
        margin: 0.2em;
        font-size: 1.25em;
        transition: all 0.2s ease-in-out;
    }

    .bookmark-item:hover {
        transform: scale(1.05);
    }

    a {
        text-decoration: none;
        color: rgb(50, 49, 48);
    }
</style>
