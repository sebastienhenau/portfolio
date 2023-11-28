<script lang="ts">
	import { Badge, Flow, FlowSection, HomeStoryFlowItem } from "$components";
</script>

<!-- TODO: tag & structure -->
<Flow>
	<FlowSection index="1">
		<div
			class="flex items-center gap-x-5"
			slot="header"
		>
			<Badge theme="accent">22</Badge>

			<h2 class="font-bold text-6">Stories</h2>
		</div>

		<HomeStoryFlowItem />

		<HomeStoryFlowItem />

		<HomeStoryFlowItem />

		<HomeStoryFlowItem />

		<HomeStoryFlowItem />

		<HomeStoryFlowItem />
	</FlowSection>
</Flow>
