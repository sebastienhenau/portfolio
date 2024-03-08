import { THEME_LOCAL_KEY } from '$constants';
import type { TTheme } from '$types';
import {
    getSystemDarkModePreference,
    getSystemModePreference,
    getTheme,
    hasLocalTheme,
    removeLocalStorageItem,
    setLocalStorageItem,
    setModeOnDocument,
} from '$utilities';
import { get, writable } from 'svelte/store';

export interface TThemeStore {
    mode: TTheme;
    isWatchingSystem: boolean;
}

/* TODO: trigger class on html using actions: https://github.com/sveltejs/svelte/issues/3105 */
const createThemeStore = () => {
    const store = writable<TThemeStore>(
        {
            mode: getTheme(),
            isWatchingSystem: !hasLocalTheme(),
        },
        (set) => {
            const systemDarkModePreference = getSystemDarkModePreference();

            const onChangeSystemDarkModePreference = () => {
                const { isWatchingSystem } = get(store);

                if (!isWatchingSystem) {
                    return;
                }

                const mode = getSystemModePreference();

                set({
                    isWatchingSystem,
                    mode,
                });

                setModeOnDocument(mode);
                removeLocalStorageItem(THEME_LOCAL_KEY);
            };

            if (systemDarkModePreference) {
                systemDarkModePreference.addEventListener('change', onChangeSystemDarkModePreference);
            }

            return () => {
                if (systemDarkModePreference) {
                    systemDarkModePreference.removeEventListener('change', onChangeSystemDarkModePreference);
                }
            };
        }
    );

    const watchSystem = () => {
        const mode = getSystemModePreference();

        store.update(() => {
            return {
                mode,
                isWatchingSystem: true,
            };
        });

        setModeOnDocument(mode);
        removeLocalStorageItem(THEME_LOCAL_KEY);
    };

    const updateLocalMode = (mode: TTheme) => {
        store.update(() => {
            return {
                mode,
                isWatchingSystem: false,
            };
        });

        setModeOnDocument(mode);
        setLocalStorageItem(THEME_LOCAL_KEY, mode);
    };

    return {
        ...store,
        updateLocalMode,
        watchSystem,
    };
};

export default createThemeStore();
