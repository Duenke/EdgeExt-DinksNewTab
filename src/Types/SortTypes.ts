export const SortKey = "DinksNewTab_SortSelection";

export enum SortSelections {
    "Default",
    "SystemFoldersLast",
    "AlphaNumeric",
    "NumericAlpha",
    "Custom"
}

export interface SortContract {
    sortFunction: Function;
    sortName: SortSelections;
}