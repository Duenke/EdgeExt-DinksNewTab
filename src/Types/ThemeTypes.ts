export const ThemeKey = "DinksNewTab_ThemeSelection";

export enum ThemeSelections {
    "Dark",
    "Light",
    "HighContrast"
}

export interface ThemeContract {
    accentColor1: string;
    backgroundColor: string;
    boxShadowColor: string;
    borderColor: string;
    fontColor1: string;
    themeName: ThemeSelections;
}