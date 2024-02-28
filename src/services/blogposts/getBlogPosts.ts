import type { TBlogPost, TBlogPosts } from '$types';

/* TODO: add pagination */
const getBlogPosts = async () => {
    const paths = import.meta.glob('/src/content/blogPosts/*.md', {
        eager: true,
    });

    const blogPosts = Object.entries(paths)
        .reduce<TBlogPosts>((result, [path, file]) => {
            const slug = path.split('/').at(-1)?.replace('.md', '') || '';

            if (!(file && typeof file === 'object' && 'metadata' in file && slug)) {
                return result;
            }

            const blogPost = {
                slug,
                ...(file.metadata as Omit<TBlogPost, 'slug'>),
            };

            if (!blogPost.published) {
                return result;
            }

            return [...result, blogPost];
        }, [])
        .toSorted((first, second) => {
            return new Date(second.date).getTime() - new Date(first.date).getTime();
        });

    return blogPosts;
};

export default getBlogPosts;
