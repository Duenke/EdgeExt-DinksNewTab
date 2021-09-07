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
        --modal-padding: 1rem;
        z-index: 11;
        position: fixed;
        top: 5rem;
        left: 15%;
        width: 70vw;
        max-height: calc(100vh - 10rem);
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        padding: var(--modal-padding);
        border-radius: 0.75rem;
        background-color: var(--theme-accentColor1);
        color: var(--theme-fontColor1);
    }

    .modal::-webkit-scrollbar {
        display: none;
    }

    :global([slot="modal-header"]) {
        z-index: 12;
        position: sticky;
        top: calc(var(--modal-padding) * -1);
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: var(--theme-accentColor1);
        border-bottom: 2px solid var(--theme-borderColor);
    }

    :global([slot="modal-body"]) {
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
    }

    :global([slot="modal-footer"]) {
        z-index: 12;
        position: sticky;
        bottom: calc(var(--modal-padding) * -1);
        left: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: var(--theme-accentColor1);
        border-top: 2px solid var(--theme-borderColor);
    }
</style>
