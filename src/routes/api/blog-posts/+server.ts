import { getBlogPosts } from '$services';
import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = async () => {
    const blogPosts = await getBlogPosts();

    return json(blogPosts);
};
