import type { TAction, TCardMetadata } from "$components";

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TCardProjectName = string;
export type TCardProjectCompany = string;
export type TCardProjectTechnologies = string[];

export interface TCardProject {
	name: TCardProjectName;
	company: TCardProjectCompany;
	technologies: TCardProjectTechnologies;
	action?: TAction;
	cardMetadata?: TCardMetadata;
}
