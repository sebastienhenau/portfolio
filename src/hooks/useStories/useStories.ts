import { stories } from "$content";

import type { TUseStories } from "./useStories.types";

export default (): TUseStories => {
	const storiesAmount = stories.length;

	return {
		stories,
		storiesAmount,
	};
};
