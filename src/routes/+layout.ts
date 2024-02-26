export interface TLayoutData {
    url: URL;
}

export const load = ({ url }: TLayoutData) => {
    return {
        url: url.pathname,
    };
};
