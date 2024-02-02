import type { TStory } from '$types';
import { error } from '@sveltejs/kit';
import type { SvelteComponent } from 'svelte';

import type { PageLoad } from './$types';

export interface TPageData {
    metadata: TStory;
    content: typeof SvelteComponent;
}

/**
 * TODO: better error
 * TODO: test alias path?
 * TODO: services?
 */
export const load: PageLoad = async ({ params }): Promise<TPageData> => {
    try {
        const story = await import(`../../../content/stories/${params.slug}.md`);

        return {
            metadata: story.metadata,
            content: story.default,
        };
    } catch (e) {
        throw error(404, `Could not find ${params.slug}`);
    }
};
