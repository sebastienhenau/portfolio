import type { TFlowItem, TLink, TListTags } from "$components";

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type TFlowItemProjectFlowItem = TFlowItem;
export type TFlowItemProjectDate = string;
export type TFlowItemProjectCompany = string;
export type TFlowItemProjectRole = string;
export type TFlowItemProjectListTags = TListTags | undefined;
export type TFlowItemProjectLink = TLink;

export interface TFlowItemProject {
	flowItem?: TFlowItemProjectFlowItem;
	date: TFlowItemProjectDate;
	company: TFlowItemProjectCompany;
	role: TFlowItemProjectRole;
	tags?: TFlowItemProjectListTags;
	link: TFlowItemProjectLink;
}
