<script lang="ts">
	import { Badge, Flow, FlowItemStory, FlowTitle } from "$components";
	import { useStories } from "$hooks";

	// -------------------------------------------------------------------------
	// hooks
	// -------------------------------------------------------------------------
	const { storiesAmount, stories } = useStories();
</script>

<Flow>
	<div
		class="flex items-center gap-x-5"
		slot="header"
	>
		<Badge theme="accent">{storiesAmount}</Badge>

		<FlowTitle>Stories</FlowTitle>
	</div>

	<ul>
		{#each stories as story}
			<li>
				<FlowItemStory {story} />
			</li>
		{/each}
	</ul>
</Flow>
