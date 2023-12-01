import { stories } from "$content";

import type { TUseStories } from "./useStories.types";

export default (): TUseStories => {
	const storiesAmount = stories.length;
	const latestStories = [...stories].splice(0, 3);

	return {
		stories,
		storiesAmount,
		latestStories,
	};
};
