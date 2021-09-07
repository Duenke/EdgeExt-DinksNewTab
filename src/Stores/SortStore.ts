import browser from "webextension-polyfill";
import { writable } from 'svelte/store';

import { SortKey, SortContract, SortSelections } from "../Types/SortTypes";
import type { BookmarkTreeNode } from '../Types/ChromeTypes';

const defaultSort: SortContract = {
    sortFunction: (nodeTree: BookmarkTreeNode[]) => nodeTree,
    sortName: SortSelections.Default
}
const systemFoldersLast: SortContract = {
    sortFunction: (nodeTree: BookmarkTreeNode[]) => {
        [
            "Favorites bar",
            "Other favorites",
            "Reading List Saves",
            "Mobile favorites",
        ].forEach((systemNode) => {
            const index = nodeTree.findIndex(
                (node) => node.title == systemNode
            );
            const holder = nodeTree.splice(index, 1);
            nodeTree = [...nodeTree, ...holder];
        });

        return nodeTree;
    },
    sortName: SortSelections.SystemFoldersLast
}

function createSort() {
    const { subscribe, set, update } = writable(defaultSort);

    return {
        subscribe,
        setSortSelection: (sortName) => {
            const sortKey = SortKey;
            const storageObject = {};
            storageObject[sortKey] = sortName;

            switch (sortName) {
                case SortSelections.Default:
                    browser.storage.local.set(storageObject);
                    set(defaultSort);
                    break;
                case SortSelections.SystemFoldersLast:
                    browser.storage.local.set(storageObject);
                    set(systemFoldersLast);
                    break;
                case SortSelections.AlphaNumeric:
                    // browser.storage.local.set(storageObject);
                    // set(alphaNumeric);
                    break;
                case SortSelections.NumericAlpha:
                    // browser.storage.local.set(storageObject);
                    // set(alphaNumeric);
                    break;
                case SortSelections.Custom:
                    // browser.storage.local.set(storageObject);
                    // set(alphaNumeric);
                    break;
                default:
                    console.warn("Failed to get and match a SortSelection! Defaulting to Default Sort.");
                    set(defaultSort);
            }
        },
        set: () => { throw ("'Set' operation blocked for immutable store 'SortStore'.") },
        update: () => { throw ("'Update' operation blocked for immutable store 'SortStore'.") }
    };
}

export const sort = createSort();