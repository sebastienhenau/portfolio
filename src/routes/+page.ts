import type { TStories } from '$types';

import type { PageLoad } from './$types';

export interface TPageData {
    stories: TStories;
}

export const load: PageLoad = async ({ fetch }): Promise<TPageData> => {
    const response = await fetch('api/stories?limit=3');
    const stories: TStories = await response.json();

    return {
        stories,
    };
};
