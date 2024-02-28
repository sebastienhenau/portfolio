import type { TPosts } from '$types';

import type { PageLoad } from './$types';

export interface TPageData {
    posts: TPosts;
}

export const load: PageLoad = async ({ fetch }): Promise<TPageData> => {
    const response = await fetch('api/posts?limit=3');
    const posts: TPosts = await response.json();

    return {
        posts,
    };
};
