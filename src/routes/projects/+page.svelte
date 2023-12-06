<script lang="ts">
	import { Badge, Flow, FlowItemProject, FlowTitle } from "$components";
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

	<ul>
		{#each projects as project}
			<li>
				<FlowItemProject {project} />
			</li>
		{/each}
	</ul>
</Flow>
