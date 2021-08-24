import { writable } from 'svelte/store';

function createTheme() {
    const { subscribe, set, update } = writable(
        {
            accentColor1: "rgb(255, 255, 255)",
            backgroundColor: "rgb(235, 235, 235)",
            borderColor: "rgb(229, 229, 229)",
            fontColor1: "rgb(50, 49, 48)",
            shadowColor: "rgb(0 0 0 / 13%)"
        }
    );

    return {
        subscribe,
        setDarkmode: () => set({
            accentColor1: "rgb(20, 20, 20)",
            backgroundColor: "rgb(10, 10, 10)",
            borderColor: "rgb(30, 30, 30)",
            fontColor1: "rgb(200, 200, 200)",
            shadowColor: "rgb(255 255 255 / 13%)"
        }),
        setLightmode: () => set({
            accentColor1: "rgb(255, 255, 255)",
            backgroundColor: "rgb(235, 235, 235)",
            borderColor: "rgb(229, 229, 229)",
            fontColor1: "rgb(50, 49, 48)",
            shadowColor: "rgb(0 0 0 / 13%)"
        })
    };
}

export const theme = createTheme();