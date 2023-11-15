<script lang="ts">
	import clsx from "clsx";
	import { CardProject } from "$components";
	import type {
		THomeProjectsItemCompany,
		THomeProjectsItemDate,
		THomeProjectsItemIndex,
		THomeProjectsItemLink,
		THomeProjectsItemName,
		THomeProjectsItemTechnologies,
		THomeProjectsItemTotal,
	} from "./HomeProjectsItem.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let index: THomeProjectsItemIndex;
	export let total: THomeProjectsItemTotal;
	export let name: THomeProjectsItemName;
	export let date: THomeProjectsItemDate;
	export let company: THomeProjectsItemCompany;
	export let link: THomeProjectsItemLink;
	export let technologies: THomeProjectsItemTechnologies;

	// -------------------------------------------------------------------------
	// Variables
	// -------------------------------------------------------------------------
	const first = index === 0;
	const last = index === total;
	const middle = !first && !last;
</script>

<li
	class={clsx("border-border", {
		"border-b 700:border-r 1200:border-r-0": first,
		"border-b": middle,
		"700:border-r 1200:border-r-0": last,
	})}
>
	<CardProject
		action={{ href: link }}
		cardMetadata={{
			number: `${index + 1}`,
			date,
			type: "project",
		}}
		{company}
		{name}
		{technologies}
	/>
</li>
