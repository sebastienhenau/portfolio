<script lang="ts">
	import {
		Badge,
		Cta,
		Divider,
		Flow,
		FlowSection,
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

			<h2 class="font-bold">Stories</h2>
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

			<h2 class="font-bold">Projects</h2>
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
