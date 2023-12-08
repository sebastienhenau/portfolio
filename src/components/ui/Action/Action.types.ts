// -----------------------------------------------------------------------------
// Variables
// -----------------------------------------------------------------------------
export type TActionElement = HTMLAnchorElement | HTMLButtonElement;

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TActionHref = string;
export type TActionType = 'button' | 'submit';
export type TActionTarget = '_blank' | null;

export interface TAction {
    href?: TActionHref;
    type?: TActionType;
    target?: TActionTarget;
}
