// import browser from "webextension-polyfill";
import { writable } from 'svelte/store';

import { ThemeKey, ThemeContract, ThemeSelections } from "../Types/ThemeTypes";

const lightTheme: ThemeContract = {
    accentColor1: "hsl(0, 0%, 100%)",
    backgroundColor: "hsl(0, 0%, 90%)",
    boxShadowColor: "hsla(0, 0%, 0%, 15%)",
    borderColor: "hsl(0, 0%, 90%)",
    fontColor1: "hsl(30, 0%, 20%)",
    themeName: ThemeSelections.LightTheme
}
const darkTheme: ThemeContract = {
    accentColor1: "hsl(0, 0%, 8%)",
    backgroundColor: "hsl(0, 0%, 5%)",
    boxShadowColor: "hsla(0, 0%, 100%, 15%)",
    borderColor: "hsl(0, 0%, 10%)",
    fontColor1: "hsl(0, 0%, 80%)",
    themeName: ThemeSelections.DarkTheme
}
const highContrastTheme: ThemeContract = {
    accentColor1: "hsl(0, 0%, 0%)",
    backgroundColor: "hsl(0, 0%, 0%)",
    boxShadowColor: "hsla(0, 0%, 100%, 100%)",
    borderColor: "hsl(0, 0%, 100%)",
    fontColor1: "hsl(0, 0%, 100%)",
    themeName: ThemeSelections.HighContrastTheme
}

function createTheme() {
    const { subscribe, set, update } = writable(lightTheme);

    return {
        subscribe,
        setThemeSelection: (themeName) => {
            const themeKey = ThemeKey;
            const storageObject = {};
            switch (themeName) {
                case ThemeSelections.LightTheme:
                    // browser.storage.local.set(storageObject[themeKey] = themeName);
                    set(lightTheme);
                    break;
                case ThemeSelections.DarkTheme:
                    // browser.storage.local.set(storageObject[themeKey] = themeName);
                    set(darkTheme);
                    break;
                case ThemeSelections.HighContrastTheme:
                    // browser.storage.local.set(storageObject[themeKey] = themeName);
                    set(highContrastTheme);
                    break;
                default:
                    console.error("Failed to get and match a ThemeSelection! Defaulting to LightTheme.");
                    set(lightTheme);
            }
        },
        set: () => { throw ("'Set' operation blocked for immutable store 'ThemeStore'.") },
        update: () => { throw ("'Update' operation blocked for immutable store 'ThemeStore'.") }
    };
}

export const theme = createTheme();