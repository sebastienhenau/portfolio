import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';
import type { TPageData } from './page.types';

/**
 * TODO: better error
 * TODO: test alias path?
 * TODO: services?
 */
export const load: PageLoad = async ({ params }): Promise<TPageData> => {
    try {
        const story = await import(`../../../stories/${params.slug}.md`);

        return {
            metadata: story.metadata,
            content: story.default,
        };
    } catch (e) {
        throw error(404, `Could not find ${params.slug}`);
    }
};
