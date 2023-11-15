<script lang="ts">
	import { projects } from "$content";
	import clsx from "clsx";
	import { CardProject, Line } from "$components";
	import type {
		TProjectsItemCompany,
		TProjectsItemDate,
		TProjectsItemIndex,
		TProjectsItemLink,
		TProjectsItemName,
		TProjectsItemTechnologies,
	} from "./ProjectsItem.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let index: TProjectsItemIndex;
	export let name: TProjectsItemName;
	export let date: TProjectsItemDate;
	export let company: TProjectsItemCompany;
	export let link: TProjectsItemLink;
	export let technologies: TProjectsItemTechnologies;

	// -------------------------------------------------------------------------
	// Variables
	// -------------------------------------------------------------------------
	const first = index === 0;
	const last = index === projects.length - 1;
	const middle = !first && !last;
</script>

<li
	class={clsx("max-700:hidden", {
		"flex flex-col justify-between items-stretch": first,
		"flex items-end": middle,
	})}
>
	{#if index === 0}
		<Line
			class="w-full"
			theme="border"
			type="right"
		/>
	{/if}

	{#if first || middle}
		<Line
			class="w-full"
			theme="border"
			type="right"
		/>
	{/if}
</li>

<li
	class={clsx("border-border", {
		border: first,
		"border-b border-l border-r": middle,
		"border-l border-r": last,
	})}
>
	<CardProject
		action={{ href: link }}
		cardMetadata={{ number: `${index + 1}`, date }}
		{company}
		{name}
		{technologies}
	/>
</li>

<li
	class={clsx("max-700:hidden", {
		"flex flex-col justify-between items-stretch": first,
		"flex items-end": middle,
	})}
>
	{#if index === 0}
		<Line
			class="w-full"
			theme="border"
			type="left"
		/>
	{/if}

	{#if first || middle}
		<Line
			class="w-full"
			theme="border"
			type="left"
		/>
	{/if}
</li>
