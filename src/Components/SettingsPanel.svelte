<script lang="ts">
    import ModalSlots from "./ModalSlots.svelte";
    import FontSelection from "./FontSelection.svelte";
    import ThemeSelection from "./ThemeSelection.svelte";
    import SortSelection from "./SortSelection.svelte";

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
        <FontSelection />
        <ThemeSelection />
        <SortSelection />
    </div>
    <div slot="modal-footer">
        <br />
    </div>
</ModalSlots>

<style>
    h1 {
        font-size: var(--header-size);
    }

    button {
        min-height: 2rem;
        min-width: 2rem;
        margin-top: auto;
        margin-bottom: auto;
        border-radius: 50%;
        font-weight: 600;
        font-size: var(--header-size);
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