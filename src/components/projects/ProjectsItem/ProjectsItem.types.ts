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
export type TProjectsItemIndex = number;
export type TProjectsItemName = TCardProjectName;
export type TProjectsItemDate = TCardMetadataDate;
export type TProjectsItemCompany = TCardProjectCompany;
export type TProjectsItemLink = TActionHref;
export type TProjectsItemTechnologies = TCardProjectTechnologies;

export interface TProjectsItem {
	index: TProjectsItemIndex;
	name: TProjectsItemName;
	date: TProjectsItemDate;
	company: TProjectsItemCompany;
	link: TProjectsItemLink;
	technologies: TProjectsItemTechnologies;
}
