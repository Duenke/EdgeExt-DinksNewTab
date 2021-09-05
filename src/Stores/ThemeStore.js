// import browser from "webextension-polyfill";
import { writable } from 'svelte/store';

const darkTheme = {
    accentColor1: "hsl(0, 0%, 8%)",
    backgroundColor: "hsl(0, 0%, 5%)",
    boxShadowColor: "hsla(0, 0%, 100%, 15%)",
    borderColor: "hsl(0, 0%, 10%)",
    fontColor1: "hsl(0, 0%, 80%)",
    isDarkmodeToggled: true
}
const lightTheme = {
    accentColor1: "hsl(0, 0%, 100%)",
    backgroundColor: "hsl(0, 0%, 90%)",
    boxShadowColor: "hsla(0, 0%, 0%, 15%)",
    borderColor: "hsl(0, 0%, 90%)",
    fontColor1: "hsl(30, 0%, 20%)",
    isDarkmodeToggled: false
}

function createTheme() {
    const { subscribe, set, update } = writable(lightTheme);

    return {
        subscribe,
        setDarkmode: () => {
            // browser.storage.local.set({ DinksNewTab_isDarkmodeToggled: true });
            set(darkTheme);
        },
        setLightmode: () => {
            // browser.storage.local.set({ DinksNewTab_isDarkmodeToggled: false });
            set(lightTheme);
        },
        set: () => { throw ("'Set' operation blocked for immutable store 'ThemeStore'.") },
        update: () => { throw ("'Update' operation blocked for immutable store 'ThemeStore'.") }
    };
}

export const theme = createTheme();