// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TCardMetadataNumber = string;
export type TCardMetadataDate = string;
export type TCardMetadataType = string;

export interface TCardMetadata {
	number: TCardMetadataNumber;
	date: TCardMetadataDate;
	type?: TCardMetadataType;
}
