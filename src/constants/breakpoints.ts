import type { TBreakpointsConfig } from "$types";

/* TODO: convert to em */
/* TODO: one source of truth with tailwind config */
export const BREAKPOINTS: TBreakpointsConfig = {
    300: {
        minMediaQuery: `(min-width: 375px)`,
        maxMediaQuery: `(max-width: 375px)`,
    },
    500: {
        minMediaQuery: `(min-width: 576px)`,
        maxMediaQuery: `(max-width: 576px)`,
    },
    600: {
        minMediaQuery: `(min-width: 640px)`,
        maxMediaQuery: `(max-width: 640px)`,
    },
    700: {
        minMediaQuery: `(min-width: 768px)`,
        maxMediaQuery: `(max-width: 768px)`,
    },
    900: {
        minMediaQuery: `(min-width: 992px)`,
        maxMediaQuery: `(max-width: 992px)`,
    },
    1000: {
        minMediaQuery: `(min-width: 1024px)`,
        maxMediaQuery: `(max-width: 1024px)`,
    },
    1200: {
        minMediaQuery: `(min-width: 1280px)`,
        maxMediaQuery: `(max-width: 1280px)`,
    },
    1500: {
        minMediaQuery: `(min-width: 1536px)`,
        maxMediaQuery: `(max-width: 1536px)`,
    },
};
