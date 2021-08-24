<script lang="ts">
    import { theme } from "../Stores/ThemeStore";
    import type { BookmarkTreeNode } from "../Types/ChromeTypes";

    export let bookmarkData: BookmarkTreeNode[];
</script>

<ul class="bookmark-list">
    {#each bookmarkData as bookmark}
        <li class="bookmark-item">
            <a href={bookmark.url}>{bookmark.title}</a>
        </li>
    {/each}
</ul>

<style>
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
        color: var(--theme-fontColor1);
    }
</style>
