import { ROUTES_STORY } from "$constants";
import type { TStory } from "$types";
import { insertDynamicRouteParam } from "$utilities";

import type { TUseStory } from "./useStory.types";

export default (story: TStory): TUseStory => {
	const storyRoute = insertDynamicRouteParam(
		ROUTES_STORY,
		"slug",
		story.slug
	);

	return {
		story,
		storyRoute,
	};
};
