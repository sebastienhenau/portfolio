import type { TButton } from '$components';

// ---------------------------------------------------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------------------------------------------------
export type TCtaText = string;
export type TCtaButton = TButton;

export interface TCta {
    text: TCtaText;
    button: TCtaButton;
}
