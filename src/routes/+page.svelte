<script lang="ts">
	import {
		Badge,
		Cta,
		Divider,
		Flow,
		FlowSection,
		FlowTitle,
		HomeAboutCard,
		HomeStoryFlowItem,
	} from "$components";
</script>

<HomeAboutCard />

<Divider />

<Flow>
	<FlowSection index="1">
		<div
			class="flex items-center gap-x-5"
			slot="header"
		>
			<Badge theme="accent">22</Badge>

			<FlowTitle>Stories</FlowTitle>
		</div>

		<HomeStoryFlowItem />

		<HomeStoryFlowItem />

		<HomeStoryFlowItem />

		<Cta
			button={{
				action: {
					href: "/",
				},
			}}
			slot="footer"
			text="Show all stories"
		/>
	</FlowSection>

	<FlowSection index="2">
		<div
			class="flex items-center gap-x-5"
			slot="header"
		>
			<Badge theme="accent">22</Badge>

			<FlowTitle>Projects</FlowTitle>
		</div>

		<Cta
			button={{
				action: {
					href: "/",
				},
			}}
			slot="footer"
			text="Show all projects"
		/>
	</FlowSection>
</Flow>
