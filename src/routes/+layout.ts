import type { LayoutLoad } from "./$types";

export interface TLayoutData {
    url: string;
}

export const load: LayoutLoad = ({ url }): TLayoutData => {
    return {
        url: url.pathname,
    };
};
