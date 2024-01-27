import type { TStories, TStory } from '$types';

import type { TGetStoriesOptions } from './getStories.types';

/* TODO: add pagination */
const getStories = async ({ limit = 0 }: TGetStoriesOptions) => {
    const paths = import.meta.glob('/src/stories/*.md', {
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

    return limit ? [...stories].slice(0, limit) : stories;
};

export default getStories;
