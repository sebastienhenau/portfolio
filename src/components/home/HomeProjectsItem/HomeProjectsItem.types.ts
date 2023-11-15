import type {
	TActionHref,
	TCardMetadataDate,
	TCardProjectCompany,
	TCardProjectName,
	TCardProjectTechnologies,
} from "$components";

// -----------------------------------------------------------------------------
// Props
// -----------------------------------------------------------------------------
export type THomeProjectsItemIndex = number;
export type THomeProjectsItemTotal = number;
export type THomeProjectsItemName = TCardProjectName;
export type THomeProjectsItemDate = TCardMetadataDate;
export type THomeProjectsItemCompany = TCardProjectCompany;
export type THomeProjectsItemLink = TActionHref;
export type THomeProjectsItemTechnologies = TCardProjectTechnologies;

export interface THomeProjectsItem {
	index: THomeProjectsItemIndex;
	total: THomeProjectsItemTotal;
	name: THomeProjectsItemName;
	date: THomeProjectsItemDate;
	company: THomeProjectsItemCompany;
	link: THomeProjectsItemLink;
	technologies: THomeProjectsItemTechnologies;
}
