<script lang="ts">
	import type { BookmarkTreeNode } from "$lib/types/ChromeTypes"

	export let bookmarkData: BookmarkTreeNode[]
</script>

<ul class="bookmark-list">
	{#each bookmarkData as bookmark}
		<li class="bookmark-item text-base-content">
			<a href="{bookmark.url}">{bookmark.title}</a>
		</li>
	{/each}
</ul>

<!-- <style>
    .bookmark-list {
        display: contents;
        list-style: none;
    }

    .bookmark-list li::before {
        content: "\200B";
    }

    .bookmark-item {
        margin: 0.2rem;
        font-size: var(--font-size);
        transition: all 0.2s ease-in-out;
    }

    .bookmark-item:hover {
        transform: scale(1.05);
        font-weight: 600;
    }

    a {
        text-decoration: none;
        color: var(--theme-fontColor1);
    }
</style> -->
