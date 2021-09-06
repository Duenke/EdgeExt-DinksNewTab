export const ThemeKey = "DinksNewTab_ThemeSelection";

export enum ThemeSelections {
    "DarkTheme",
    "LightTheme",
    "HighContrastTheme"
}

export interface ThemeContract {
    accentColor1: string;
    backgroundColor: string;
    boxShadowColor: string;
    borderColor: string;
    fontColor1: string;
    themeName: ThemeSelections;
}