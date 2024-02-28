import { getPosts } from '$services';
import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = async () => {
    const posts = await getPosts();

    return json(posts);
};
