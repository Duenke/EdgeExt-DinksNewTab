export const SortKey = "DinksNewTab_SortSelection";

export enum SortSelections {
    "Default",
    "SystemFoldersLast",
    "0 -> Z",
    "Z -> 0",
    "New -> Old",
    "Old -> New",
    "Custom"
}

export interface SortContract {
    sortFunction: Function;
    sortName: SortSelections;
}