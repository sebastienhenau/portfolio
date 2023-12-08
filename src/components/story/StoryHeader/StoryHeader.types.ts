import type { TListTags } from '$components';

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TStoryHeaderTitle = string;
export type TStoryHeaderDate = string;
export type TStoryHeaderListTags = TListTags;

export interface TStoryHeader {
    title: TStoryHeaderTitle;
    date: TStoryHeaderDate;
    listTags: TStoryHeaderListTags;
}
