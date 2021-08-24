<script>
    import { theme } from "../Stores/ThemeStore";

    let isDarkmodeToggled = false;
    $: {
        if (isDarkmodeToggled) {
            theme.setDarkmode();
        }
        else {
            theme.setLightmode();
        }
    }
</script>

<input type="checkbox" bind:checked={isDarkmodeToggled} />

<style>
    input {
        position: relative;
        appearance: none;
        outline: none;
        width: 50px;
        height: 30px;
        background-color: #ffffff;
        border: 1px solid #d9dadc;
        border-radius: 50px;
        box-shadow: inset -20px 0 0 0 #ffffff;
        transition-duration: 200ms;
    }

    input:after {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        width: 26px;
        height: 26px;
        background-color: transparent;
        border-radius: 50%;
        box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
    }

    input:checked {
        border-color: rgb(0, 120, 212);
        box-shadow: inset 20px 0 0 0 rgb(0, 120, 212);
    }

    input:checked:after {
        left: 20px;
        box-shadow: -2px 4px 3px rgba(0, 0, 0, 0.05);
    }
</style>
