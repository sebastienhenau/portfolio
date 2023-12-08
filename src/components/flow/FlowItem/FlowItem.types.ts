import type { TItem } from '$components';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TFlowItemTitle = string;
export type TFlowItemItem = TItem;

export interface TFlowItem {
    title: TFlowItemTitle;
    item: TFlowItemItem;
}
