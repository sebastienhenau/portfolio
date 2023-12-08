// -------------------------------------------------------------------------
// Props
// -------------------------------------------------------------------------
export type TBadgeTheme = 'default' | 'accent';
export type TBadgeInherit = boolean;

export interface TBadge {
    theme?: TBadgeTheme;
    inherit?: TBadgeInherit;
}
