// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TLineType = "top" | "right" | "bottom" | "left";
export type TLineTheme = "default" | "text-3";

export interface TLine {
	type: TLineType;
	theme?: TLineTheme;
}
