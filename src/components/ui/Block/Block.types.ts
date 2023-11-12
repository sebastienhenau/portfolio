// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TBlockTitle = string;
export type TBlockSubtitle = string;
export type TBlockDescription = string;
export type TBlockTag = string;

export interface TBlock {
	title: TBlockTitle;
	subtitle: TBlockSubtitle;
	description: TBlockDescription;
	tag: TBlockTag;
}
