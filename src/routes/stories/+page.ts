import type { TStories } from '$types';

import type { PageLoad } from './$types';
import type { TPageData } from './page.types';

export const load: PageLoad = async ({ fetch }): Promise<TPageData> => {
    const response = await fetch('api/stories');
    const stories: TStories = await response.json();

    return {
        stories,
    };
};
