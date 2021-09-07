import browser from "webextension-polyfill";
import { writable } from 'svelte/store';

import { ThemeKey, ThemeContract, ThemeSelections } from "../Types/ThemeTypes";

const lightTheme: ThemeContract = {
    accentColor1: "hsl(0, 0%, 100%)",
    backgroundColor: "hsl(0, 0%, 90%)",
    boxShadowColor: "hsla(0, 0%, 0%, 15%)",
    borderColor: "hsl(0, 0%, 90%)",
    fontColor1: "hsl(30, 0%, 20%)",
    themeName: ThemeSelections.Light
}
const darkTheme: ThemeContract = {
    accentColor1: "hsl(0, 0%, 8%)",
    backgroundColor: "hsl(0, 0%, 5%)",
    boxShadowColor: "hsla(0, 0%, 100%, 15%)",
    borderColor: "hsl(0, 0%, 10%)",
    fontColor1: "hsl(0, 0%, 80%)",
    themeName: ThemeSelections.Dark
}
const highContrastTheme: ThemeContract = {
    accentColor1: "hsl(0, 0%, 0%)",
    backgroundColor: "hsl(0, 0%, 0%)",
    boxShadowColor: "hsla(0, 0%, 100%, 100%)",
    borderColor: "hsl(0, 0%, 100%)",
    fontColor1: "hsl(0, 0%, 100%)",
    themeName: ThemeSelections.HighContrast
}

function createTheme() {
    const { subscribe, set, update } = writable(lightTheme);

    return {
        subscribe,
        setThemeSelection: (themeName) => {
            const themeKey = ThemeKey;
            const storageObject = {};
            storageObject[themeKey] = themeName;

            switch (themeName) {
                case ThemeSelections.Light:
                    browser.storage.local.set(storageObject);
                    set(lightTheme);
                    break;
                case ThemeSelections.Dark:
                    browser.storage.local.set(storageObject);
                    set(darkTheme);
                    break;
                case ThemeSelections.HighContrast:
                    browser.storage.local.set(storageObject);
                    set(highContrastTheme);
                    break;
                default:
                    console.warn("Failed to get and match a ThemeSelection! Defaulting to Light Theme.");
                    set(lightTheme);
            }
        },
        set: () => { throw ("'Set' operation blocked for immutable store 'ThemeStore'.") },
        update: () => { throw ("'Update' operation blocked for immutable store 'ThemeStore'.") }
    };
}

export const theme = createTheme();