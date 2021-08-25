import browser from "webextension-polyfill";
import { writable } from 'svelte/store';

const darkTheme = {
    accentColor1: "rgb(20, 20, 20)",
    backgroundColor: "rgb(10, 10, 10)",
    boxShadowColor: "rgb(255 255 255 / 13%)",
    borderColor: "rgb(30, 30, 30)",
    fontColor1: "rgb(200, 200, 200)",
    isDarkmodeToggled: true
}
const lightTheme = {
    accentColor1: "rgb(255, 255, 255)",
    backgroundColor: "rgb(235, 235, 235)",
    boxShadowColor: "rgb(0 0 0 / 13%)",
    borderColor: "rgb(229, 229, 229)",
    fontColor1: "rgb(50, 49, 48)",
    isDarkmodeToggled: false
}

function createTheme() {
    const { subscribe, set, update } = writable(lightTheme);

    return {
        subscribe,
        setDarkmode: () => {
            browser.storage.local.set({ DinksNewTab_isDarkmodeToggled: true });
            set(darkTheme);
        },
        setLightmode: () => {
            browser.storage.local.set({ DinksNewTab_isDarkmodeToggled: false });
            set(lightTheme);
        },
        set: () => { throw ("'Set' operation blocked for immutable store 'ThemeStore'.") },
        update: () => { throw ("'Update' operation blocked for immutable store 'ThemeStore'.") }
    };
}

export const theme = createTheme();