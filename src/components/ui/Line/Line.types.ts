// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TLineType = "top" | "right" | "bottom" | "left";
// TODO: set border to default
export type TLineTheme = "default" | "text-3" | "border";

export interface TLine {
	type: TLineType;
	theme?: TLineTheme;
}
