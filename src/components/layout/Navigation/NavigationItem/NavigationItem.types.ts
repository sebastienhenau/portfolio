import type { TAction, TIcon } from '$components';

// ---------------------------------------------------------------------------------------------------------------------
// Contexts
// ---------------------------------------------------------------------------------------------------------------------
export type TNavigationItemAction = TAction;
export type TNavigationItemIcon = TIcon;

export interface TNavigationItem {
    action: TNavigationItemAction;
    icon: TNavigationItemIcon;
}
