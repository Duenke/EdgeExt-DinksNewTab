<script lang="ts">
    import browser from "webextension-polyfill";
    import { theme } from "../Stores/ThemeStore";

    let isDarkmodeToggled: boolean = false;

    const key: string = "DinksNewTab_isDarkmodeToggled";

    browser.storage.local
        .get(key)
        .then((data) => {
            isDarkmodeToggled = data[key];
        })
        .catch((error) => {
            console.error(error.message);
        });

    $: {
        if (isDarkmodeToggled) {
            theme.setDarkmode();
        } else {
            theme.setLightmode();
        }
    }
</script>

<label class="switch">
    <input type="checkbox" bind:checked={isDarkmodeToggled} />
    <span class="slider round" />
</label>

<style>
    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        max-height: 100%;
        max-width: 5%;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: rgb(255, 255, 255);
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: rgb(0, 120, 212);
    }

    input:focus + .slider {
        box-shadow: 0 0 1px rgb(0, 120, 212);
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>
