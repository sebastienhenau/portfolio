import { THEME_DARK, THEME_LIGHT, THEME_LOCAL_KEY } from '$constants';
import type { TTheme } from '$types';
import { getLocalStorageItem, isBrowser } from '$utilities';

export const getSystemDarkModePreference = (): MediaQueryList | null => {
    return isBrowser() ? window.matchMedia('(prefers-color-scheme: dark)') : null;
};

export const doesSystemDarkModePreferenceMatch = () => {
    return getSystemDarkModePreference()?.matches || false;
};

export const getSystemModePreference = (): TTheme => {
    return doesSystemDarkModePreferenceMatch() ? THEME_DARK : THEME_LIGHT;
};

export const getLocalModePreference = (): TTheme | '' => {
    return getLocalStorageItem(THEME_LOCAL_KEY) as TTheme | '';
};

export const isLocalThemeDark = () => {
    return getLocalModePreference() === THEME_DARK;
};

export const hasLocalTheme = (): boolean => {
    return !!getLocalModePreference();
};

export const getTheme = (): TTheme => {
    return getLocalModePreference() || getSystemModePreference();
};

export const setModeOnDocument = (mode: TTheme) => {
    if (mode === THEME_DARK) {
        setDarkModeOnDocument();
    } else {
        setLightModeOnDocument();
    }
};

export const setDarkModeOnDocument = () => {
    document.documentElement.classList.add('dark');
};

export const setLightModeOnDocument = () => {
    document.documentElement.classList.remove('dark');
};
