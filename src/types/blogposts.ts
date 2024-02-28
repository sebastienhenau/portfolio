export interface TBlogPost {
    slug: string;
    date: string;
    description: string;
    title: string;
    image: string;
    tags: string[];
    published?: boolean;
}

export type TBlogPosts = TBlogPost[];
