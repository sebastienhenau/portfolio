import type { TItem, TLink, TListTags } from "$components";

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TStoryItemItem = TItem | undefined;
export type TStoryItemTitle = string;
export type TStoryItemDate = string;
export type TStoryItemDescription = string;
export type TStoryItemListTags = TListTags | undefined;
export type TStoryItemLink = TLink;

export interface TStoryItem {
	item?: TStoryItemItem;
	title: TStoryItemTitle;
	date: TStoryItemDate;
	description: TStoryItemDescription;
	tags?: TStoryItemListTags;
	link: TStoryItemLink;
}
