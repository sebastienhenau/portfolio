export interface TStory {
    slug: string;
    date: string;
    description: string;
    title: string;
    image: string;
    tags: string[];
    published?: boolean;
}

export type TStories = TStory[];
