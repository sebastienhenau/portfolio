<script lang="ts">
	import {
		Badge,
		Flow,
		FlowTable,
		FlowTableBodyRowProject,
		FlowTitle,
		TableHeaderColumn,
	} from "$components";
	import { projects } from "$content";
</script>

<!-- TODO: link projects by companies -->
<Flow>
	<div
		class="flex items-center gap-x-5"
		slot="header"
	>
		<Badge theme="accent">{projects.length}</Badge>

		<FlowTitle>Made at Little Miss Robot</FlowTitle>
	</div>

	<FlowTable>
		<svelte:fragment slot="header">
			<TableHeaderColumn spacing={false}>Year</TableHeaderColumn>

			<TableHeaderColumn>Name</TableHeaderColumn>

			<TableHeaderColumn>Technologies</TableHeaderColumn>
		</svelte:fragment>

		{#each projects as project}
			<FlowTableBodyRowProject {project} />
		{/each}
	</FlowTable>
</Flow>
