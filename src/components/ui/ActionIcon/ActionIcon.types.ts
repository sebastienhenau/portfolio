import type { TAction, TIcon } from "$components";

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TActionIconAction = TAction;
export type TActionIconIcon = TIcon;

export interface TActionIcon {
	action: TActionIconAction;
	icon: TActionIconIcon;
}
