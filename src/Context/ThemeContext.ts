import { createContext, useContext } from 'react';

export enum Theme {
    Dark = 'Dark',
    Light = 'Light',
}

export type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({ theme: Theme.Dark, setTheme: () => {}});
export const useTheme = () => useContext(ThemeContext);
