<script lang="ts">
	import {
		Action,
		FlowTableBodyRow,
		ListTags,
		TableBodyColumn,
	} from "$components";
	import type { TFlowTableBodyRowProjectProject } from "./FlowTableBodyRowProject.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let project: TFlowTableBodyRowProjectProject;

	// -------------------------------------------------------------------------
	// Variables
	// -------------------------------------------------------------------------
	const { name, date, technologies, link } = project;

	const limitedTechnologies = [...technologies].splice(0, 3);
	const remainingTechnologiesAmount =
		technologies.length - limitedTechnologies.length;
	const listTagsItems =
		remainingTechnologiesAmount > 0
			? [...limitedTechnologies, `+${remainingTechnologiesAmount}`]
			: limitedTechnologies;
</script>

<FlowTableBodyRow>
	<TableBodyColumn
		class="text-site-contrast-2 text-3"
		spacing={false}
	>
		<time
			class="text-inherit block"
			datetime=""
		>
			{date}
		</time>
	</TableBodyColumn>

	<TableBodyColumn class="font-bold">
		<Action
			href={link}
			target="_blank"
		>
			{name}
		</Action>
	</TableBodyColumn>

	<TableBodyColumn>
		<ListTags items={listTagsItems} />
	</TableBodyColumn>
</FlowTableBodyRow>
