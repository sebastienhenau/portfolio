import { isBrowser } from '$utilities';
import { readable } from 'svelte/store';
import type { StartStopNotifier } from 'svelte/store';

export type TReducedMotionStore = boolean;

const createReducedMotionStore = () => {
    const getReducedMotionPreference = (): MediaQueryList | null => {
        return isBrowser() ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    };

    const doesReducedMotionPreferenceMatch = () => {
        return getReducedMotionPreference()?.matches ?? false;
    };

    const setter: StartStopNotifier<TReducedMotionStore> = (set) => {
        const reducedMotionPreference = getReducedMotionPreference();

        const onChangeMotionPreference = () => {
            set(doesReducedMotionPreferenceMatch());
        };

        if (reducedMotionPreference) {
            reducedMotionPreference.addEventListener('change', onChangeMotionPreference);
        }

        return () => {
            if (reducedMotionPreference) {
                reducedMotionPreference.removeEventListener('change', onChangeMotionPreference);
            }
        };
    };

    return readable<TReducedMotionStore>(doesReducedMotionPreferenceMatch(), setter);
};

export default createReducedMotionStore();
