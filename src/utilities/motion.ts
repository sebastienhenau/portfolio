import { isBrowser } from "$utilities";

export const getReducedMotionPreference = (): MediaQueryList | null => {
    return isBrowser() ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
};

export const doesReducedMotionPreferenceMatch = (): boolean => {
    return getReducedMotionPreference()?.matches ?? false;
};
