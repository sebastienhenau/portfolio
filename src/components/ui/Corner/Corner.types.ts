// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TCornerType = "tl" | "tr" | "br" | "bl";
export type TCornerTheme = "default" | "text-3";
export type TCornerRelative = boolean;

export interface TCorner {
	type: TCornerType;
	theme?: TCornerTheme;
	relative?: TCornerRelative;
}
