<script lang="ts">
    export let isModalOpen: boolean;

    let prevBodyOverflow: string;

    $: if (isModalOpen) {
        disableScroll();
    } else {
        enableScroll();
    }

    function close(): void {
        isModalOpen = false;
    }

    function closeOnEscape(event): void {
        if (event.key === "Escape") {
            close();
        }
    }

    function disableScroll() {
        prevBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
    }

    function enableScroll() {
        document.body.style.overflow = prevBodyOverflow || "";
    }
</script>

<svelte:window on:keydown={closeOnEscape} />

{#if isModalOpen}
    <div class="window-overlay" on:click={close} />

    <section class="modal">
        <slot name="modal-header">
            <h1>Modal Header Slot</h1>
            <button on:click={close}>X</button>
        </slot>
        <slot name="modal-body">
            <h1>Modal Body Slot</h1>
            <h1>Modal Body Slot</h1>
            <h1>Modal Body Slot</h1>
            <h1>Modal Body Slot</h1>
            <h1>Modal Body Slot</h1>
            <h1>Modal Body Slot</h1>
        </slot>
        <slot name="modal-footer">
            <h1>Modal Footer Slot</h1>
        </slot>
    </section>
{/if}

<style>
    .window-overlay {
        z-index: 10;
        position: fixed;
        min-height: 100%;
        min-width: 100%;
        background-color: hsla(0, 0%, 0%, 50%);
        backdrop-filter: blur(1px);
    }

    .modal {
        z-index: 11;
        position: fixed;
        top: 5rem;
        bottom: 5rem;
        left: 15%;
        width: 70%;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        padding: 1rem;
        border-radius: 0.75rem;
        background-color: var(--theme-accentColor1);
        color: var(--theme-fontColor1);
    }

    .modal::-webkit-scrollbar {
        display: none;
    }

    :global([slot="modal-header"]) {
        position: sticky;
        top: -1rem;
        left: 0;
        background-color: var(--theme-accentColor1);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 2px solid var(--theme-borderColor);
    }

    :global([slot="modal-body"]) {
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
    }

    :global([slot="modal-footer"]) {
        position: sticky;
        bottom: -1rem;
        left: 0;
        background-color: var(--theme-accentColor1);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-top: 2px solid var(--theme-borderColor);
    }
</style>
