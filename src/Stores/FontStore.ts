import browser from "webextension-polyfill";
import { writable } from 'svelte/store';

import { FontKey, HeaderKey } from "../Types/FontTypes";

function createFont() {
    const { subscribe, set, update } = writable(1.25);
    const fontKey = FontKey;
    const storageObject = {};

    return {
        subscribe,
        set: (value) => {
            storageObject[fontKey] = value;
            browser.storage.local.set(storageObject);
            set(value);
        },
        update: (newValue) => {
            storageObject[fontKey] = newValue;
            console.log("DINKS Font");
            browser.storage.local.set(storageObject);
            update(newValue => newValue);
        }
    };
}

export const font = createFont();

function createHeader() {
    const { subscribe, set, update } = writable(2);
    const headerKey = HeaderKey;
    const storageObject = {};

    return {
        subscribe,
        set: (value) => {
            storageObject[headerKey] = value;
            browser.storage.local.set(storageObject);
            set(value);
        },
        update: (newValue) => {
            storageObject[headerKey] = newValue;
            console.log("DINKS Header");
            browser.storage.local.set(storageObject);
            update(newValue => newValue);
        }
    };
}

export const header = createHeader();