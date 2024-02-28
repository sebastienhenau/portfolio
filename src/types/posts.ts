export interface TPost {
    slug: string;
    date: string;
    description: string;
    title: string;
    image: string;
    tags: string[];
    published?: boolean;
}

export type TPosts = TPost[];
