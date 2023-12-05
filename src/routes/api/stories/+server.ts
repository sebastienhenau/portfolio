import { getStories } from "$services";
import { json } from "@sveltejs/kit";

export const GET = async () => {
	const stories = await getStories();

	return json(stories);
};
