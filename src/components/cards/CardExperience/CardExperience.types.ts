import type { TCard } from "$components";

// -------------------------------------------------------------------------
// Props
// -------------------------------------------------------------------------
export type TCardExperienceDate = string;
export type TCardExperienceCompany = string;
export type TCardExperienceRole = string;
export type TCardExperienceDescription = string;
export type TCardExperienceCompact = boolean;

export interface TCardExperience {
	card: TCard;
	date: TCardExperienceDate;
	company: TCardExperienceCompany;
	role: TCardExperienceRole;
	description: TCardExperienceDescription;
	compact: TCardExperienceCompact;
}
