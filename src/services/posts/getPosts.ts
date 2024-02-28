import type { TPost, TPosts } from '$types';

/* TODO: add pagination */
const getPosts = async () => {
    const paths = import.meta.glob('/src/content/posts/*.md', {
        eager: true,
    });

    const posts = Object.entries(paths)
        .reduce<TPosts>((result, [path, file]) => {
            const slug = path.split('/').at(-1)?.replace('.md', '') || '';

            if (!(file && typeof file === 'object' && 'metadata' in file && slug)) {
                return result;
            }

            const post = {
                slug,
                ...(file.metadata as Omit<TPost, 'slug'>),
            };

            if (!post.published) {
                return result;
            }

            return [...result, post];
        }, [])
        .toSorted((first, second) => {
            return new Date(second.date).getTime() - new Date(first.date).getTime();
        });

    return posts;
};

export default getPosts;
