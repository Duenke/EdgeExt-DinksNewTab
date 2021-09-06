<script lang="ts">
    import ThemeSelection from "./ThemeSelection.svelte";
    import ModalSlots from "./ModalSlots.svelte";

    export let isModalOpen: boolean;

    function close(): void {
        isModalOpen = false;
    }
</script>

<ModalSlots bind:isModalOpen>
    <div slot="modal-header">
        <h1>Dinks New Tab Settings</h1>
        <button on:click={close}>X</button>
    </div>
    <div slot="modal-body">
        <ThemeSelection />
        <h1>body here</h1>
        <h1>body here</h1>
        <h1>body here</h1>
        <h1>body here</h1>
        <h1>body here</h1>
        <h1>body here</h1>
    </div>
    <div slot="modal-footer">
        <h1>footer here</h1>
    </div>
</ModalSlots>

<style>
    button {
        min-height: 2rem;
        min-width: 2rem;
        margin-top: auto;
        margin-bottom: auto;
        border-radius: 2rem;
        font-weight: 600;
        font-size: 1rem;
        border: 2px solid var(--theme-fontColor1);
        color: var(--theme-fontColor1);
        background-color: var(--theme-accentColor1);
    }

    button:hover {
        border-color: var(--theme-accentColor1);
        color: var(--theme-accentColor1);
        background-color: var(--theme-fontColor1);
    }
</style>