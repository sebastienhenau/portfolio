<script lang="ts">
	import { Badge, Flow, FlowItemProject, FlowTitle } from "$components";
	import { useProjects } from "$hooks";

	// -------------------------------------------------------------------------
	// hooks
	// -------------------------------------------------------------------------
	const { projectsAmount, projects } = useProjects();
</script>

<!-- TODO: link projects by companies -->
<Flow>
	<div
		class="flex items-center gap-x-5"
		slot="header"
	>
		<Badge theme="accent">{projectsAmount}</Badge>

		<FlowTitle>Made at Little Miss Robot</FlowTitle>
	</div>

	<ul>
		{#each projects as project}
			<li>
				<FlowItemProject {project} />
			</li>
		{/each}
	</ul>
</Flow>
