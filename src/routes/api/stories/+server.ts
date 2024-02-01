import { getStories } from '$services';
import { json } from '@sveltejs/kit';

import type { RequestEvent } from './$types';

export const prerender = true;

export const GET = async ({ url }: RequestEvent) => {
    const limit = url.searchParams.get('limit') || null;

    const stories = await getStories({
        limit: Number(limit),
    });

    return json(stories);
};
