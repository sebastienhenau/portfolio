import type { TStories, TStory } from '$types';

/* TODO: add pagination */
const getStories = async () => {
    const paths = import.meta.glob('/src/content/stories/*.md', {
        eager: true,
    });

    const stories = Object.entries(paths)
        .reduce<TStories>((result, [path, file]) => {
            const slug = path.split('/').at(-1)?.replace('.md', '') || '';

            if (!(file && typeof file === 'object' && 'metadata' in file && slug)) {
                return result;
            }

            const story = {
                slug,
                ...(file.metadata as Omit<TStory, 'slug'>),
            };

            if (!story.published) {
                return result;
            }

            return [...result, story];
        }, [])
        .toSorted((first, second) => {
            return new Date(second.date).getTime() - new Date(first.date).getTime();
        });

    return stories;
};

export default getStories;
