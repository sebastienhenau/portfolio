import type { TPost } from '$types';
import { error } from '@sveltejs/kit';
import type { SvelteComponent } from 'svelte';

import type { PageLoad } from './$types';

export interface TPageData {
    metadata: TPost;
    content: typeof SvelteComponent;
}

/**
 * TODO: better error
 * TODO: services?
 */
export const load: PageLoad = async ({ params }): Promise<TPageData> => {
    try {
        const post = await import(`../../../content/posts/${params.slug}.md`);

        return {
            metadata: post.metadata,
            content: post.default,
        };
    } catch (e) {
        throw error(404, `Could not find ${params.slug}`);
    }
};
