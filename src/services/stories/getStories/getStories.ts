import type { TStories, TStory } from "$types";

const getStories = async () => {
	const stories: TStories = [];

	const paths = import.meta.glob("/src/stories/*.md", {
		eager: true,
	});

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split("/").at(-1)?.replace(".md", "") || "";

		if (!(file && typeof file === "object" && "metadata" in file && slug)) {
			continue;
		}

		const story = {
			slug,
			...(file.metadata as Omit<TStory, "slug">),
		};

		if (!story.published) {
			continue;
		}

		stories.push(story);
	}

	return stories;
};

export default getStories;
