import type { TImage } from '$components';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TCardImage = TImage | undefined;

export interface TCard {
    image: TCardImage;
}
