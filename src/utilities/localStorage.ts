import { isBrowser } from '$utilities';

export const getLocalStorageItem = (key: string): string | null => {
    return isBrowser() ? localStorage.getItem(key) : null;
};

export const hasLocalStorageItem = (key: string): boolean => {
    return !!getLocalStorageItem(key);
};

export const setLocalStorageItem = (key: string, value: string) => {
    if (isBrowser()) {
        localStorage.setItem(key, value);
    }
};

export const removeLocalStorageItem = (key: string) => {
    if (isBrowser()) {
        return localStorage.removeItem(key);
    }
};
