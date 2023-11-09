// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TIntroTitle = string;
export type TIntroSubtitle = string;
export type TIntroDescription = string;
export type TIntroTag = string;

export interface TIntro {
	title: TIntroTitle;
	subtitle: TIntroSubtitle;
	description: TIntroDescription;
	tag: TIntroTag;
}
