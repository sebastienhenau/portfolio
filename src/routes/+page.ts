import type { TBlogPosts } from '$types';

import type { PageLoad } from './$types';

export interface TPageData {
    blogPosts: TBlogPosts;
}

export const load: PageLoad = async ({ fetch }): Promise<TPageData> => {
    const response = await fetch('api/blog-posts');
    const blogPosts: TBlogPosts = await response.json();

    return {
        blogPosts,
    };
};
