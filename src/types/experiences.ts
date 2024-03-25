export interface TExperience {
    role: string;
    company: string;
    description: string;
    time: string;
    current?: boolean;
}

export type TExperiences = TExperience[];
