import type { TFlowItem, TLink, TListTags } from "$components";

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TFlowItemStoryFlowItem = TFlowItem;
export type TFlowItemStoryDate = string;
export type TFlowItemStoryDescription = string;
export type TFlowItemStoryListTags = TListTags | undefined;
export type TFlowItemStoryLink = TLink;

export interface TFlowItemStory {
	flowItem?: TFlowItemStoryFlowItem;
	date: TFlowItemStoryDate;
	description: TFlowItemStoryDescription;
	tags?: TFlowItemStoryListTags;
	link: TFlowItemStoryLink;
}
