import type { TImage } from "$components";

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TItemImage = TImage | undefined;

export interface TItem {
	image?: TItemImage;
}
