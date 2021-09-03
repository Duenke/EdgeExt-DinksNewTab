<script lang="ts">
    export let isModalOpen: boolean;

    function close(): void {
        isModalOpen = false;
    }

    function closeOnEscape(event): void {
        if (event.key === "Escape") {
            close();
        }
    }
</script>

<svelte:window on:keydown={closeOnEscape} />

{#if isModalOpen}
    <div class="window-overlay">
        <div class="modal">
            <div class="modal-header">
                <h1>Dinks New Tab Settings</h1>
                <button on:click={close}>X</button>
            </div>
            <div class="modal-body">
                <h1>body here</h1>
                <h1>body here</h1>
                <h1>body here</h1>
                <h1>body here</h1>
                <h1>body here</h1>
                <h1>body here</h1>
            </div>
            <div class="modal-footer">
                <h1>footer here</h1>
            </div>
        </div>
    </div>
{/if}

<style>
    .window-overlay {
        z-index: 10;
        position: absolute;
        min-height: 100%;
        min-width: 100%;
        background-color: hsla(0, 0%, 0%, 0.5);
    }

    .modal {
        width: 70%;
        margin: 5rem auto 0;
        background-color: var(--theme-accentColor1);
    }

    .modal-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 2px solid var(--theme-borderColor);
    }

    .modal-body {
        display: flex;
        flex-direction: column;
    }

    .modal-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-top: 2px solid var(--theme-borderColor);
    }
</style>
