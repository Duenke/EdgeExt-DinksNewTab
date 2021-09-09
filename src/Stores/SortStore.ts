import browser from "webextension-polyfill";
import { writable } from 'svelte/store';

import { SortKey, SortContract, SortSelections } from "../Types/SortTypes";
import type { BookmarkTreeNode } from '../Types/ChromeTypes';

const defaultSort: SortContract = {
    sortFunction: sortDefault,
    sortName: SortSelections["Default"]
}
const systemFoldersLast: SortContract = {
    sortFunction: sortSystemFoldersLast,
    sortName: SortSelections["SystemFoldersLast"]
}
const zeroToZ: SortContract = {
    sortFunction: sortZeroToZ,
    sortName: SortSelections["0 -> Z"]
}
const zToZero: SortContract = {
    sortFunction: sortZToZero,
    sortName: SortSelections["Z -> 0"]
}
const newToOld: SortContract = {
    sortFunction: sortNewToOld,
    sortName: SortSelections["New -> Old"]
}
const oldToNew: SortContract = {
    sortFunction: sortOldToNew,
    sortName: SortSelections["Old -> New"]
}
const custom: SortContract = {
    sortFunction: sortCustom,
    sortName: SortSelections["Custom"]
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
                case SortSelections["Default"]:
                    browser.storage.local.set(storageObject);
                    set(defaultSort);
                    break;
                case SortSelections["SystemFoldersLast"]:
                    browser.storage.local.set(storageObject);
                    set(systemFoldersLast);
                    break;
                case SortSelections["0 -> Z"]:
                    browser.storage.local.set(storageObject);
                    set(zeroToZ);
                    break;
                case SortSelections["Z -> 0"]:
                    browser.storage.local.set(storageObject);
                    set(zToZero);
                    break;
                case SortSelections["New -> Old"]:
                    browser.storage.local.set(storageObject);
                    set(newToOld);
                    break;
                case SortSelections["Old -> New"]:
                    browser.storage.local.set(storageObject);
                    set(oldToNew);
                    break;
                case SortSelections["Custom"]:
                    browser.storage.local.set(storageObject);
                    set(custom);
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

//#region Private Sorting Functions

function sortDefault(nodeTree: BookmarkTreeNode[]) { return nodeTree }

function sortSystemFoldersLast(nodeTree: BookmarkTreeNode[]) {
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
}

function sortZeroToZ(nodeTree: BookmarkTreeNode[]) {
    return nodeTree.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }
        else if (a.title < b.title) {
            return -1;
        }
        else {
            return 0;
        }
    });
}

function sortZToZero(nodeTree: BookmarkTreeNode[]) {
    return nodeTree.sort((a, b) => {
        if (a.title > b.title) {
            return -1;
        }
        else if (a.title < b.title) {
            return 1;
        }
        else {
            return 0;
        }
    });
}

function sortNewToOld(nodeTree: BookmarkTreeNode[]) {
    return nodeTree.sort((a, b) => {
        if (a.dateGroupModified > b.dateGroupModified) {
            return -1;
        }
        else if (a.dateGroupModified < b.dateGroupModified) {
            return 1;
        }
        else {
            return 0;
        }
    });
}

function sortOldToNew(nodeTree: BookmarkTreeNode[]) {
    return nodeTree.sort((a, b) => {
        if (a.dateGroupModified > b.dateGroupModified) {
            return 1;
        }
        else if (a.dateGroupModified < b.dateGroupModified) {
            return -1;
        }
        else {
            return 0;
        }
    });
}

function sortCustom(nodeTree: BookmarkTreeNode[]) {
    return nodeTree;
}

//#endregion Private Sorting Functions