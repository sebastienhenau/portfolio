import type { TCard, TCardMetadata } from "$components";

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TCardEducationName = string;
export type TCardEducationSchool = string;

export interface TCardEducation {
	card: TCard;
	cardMetaData: TCardMetadata;
	name: TCardEducationName;
	school: TCardEducationSchool;
}
