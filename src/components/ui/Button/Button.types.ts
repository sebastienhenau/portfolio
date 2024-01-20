import type { TAction } from '$components';

// ---------------------------------------------------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------------------------------------------------
export type TButtonAction = TAction;
export type TButtonVariant = 'default' | 'neutral';
export type TButtonSize = 'default' | 'sm';
export type TButtonForm = 'default' | 'square';

export interface TButton {
    action: TAction;
    variant?: TButtonVariant;
    size?: TButtonSize;
    form?: TButtonForm;
}

// ---------------------------------------------------------------------------------------------------------------------
// Contexts
// ---------------------------------------------------------------------------------------------------------------------
export interface TButtonContext {
    variant: TButtonVariant;
}
