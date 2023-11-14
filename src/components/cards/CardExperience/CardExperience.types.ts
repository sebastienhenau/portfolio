// -------------------------------------------------------------------------
// Props
// -------------------------------------------------------------------------
export type TCardExperienceDate = string;
export type TCardExperienceCompany = string;
export type TCardExperienceRole = string;
export type TCardExperienceDescription = string;

export interface TCardExperience {
	date: TCardExperienceDate;
	company: TCardExperienceCompany;
	role: TCardExperienceRole;
	description: TCardExperienceDescription;
}
