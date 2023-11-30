export interface TStory {
	slug: string;
	date: string;
	description: string;
	title: string;
	image: string;
	tags: string[];
}

export type TStories = TStory[];
