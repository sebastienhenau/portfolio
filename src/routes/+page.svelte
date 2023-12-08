<script lang="ts">
	import {
		Cta,
		Divider,
		Flow,
		FlowItemProject,
		FlowItemStory,
		FlowTitle,
		HomeAboutCard,
	} from "$components";
	import { ROUTES_PROJECTS, ROUTES_STORIES } from "$constants";
	import type { TPageData } from "./page.types";
	import { projects } from "$content";

	// -------------------------------------------------------------------------
	// Server
	// -------------------------------------------------------------------------
	export let data: TPageData;

	// -------------------------------------------------------------------------
	// Variables
	// -------------------------------------------------------------------------
	const lastProjects = [...projects].splice(0, 3);
</script>

<HomeAboutCard />

<Divider />

<Flow index="1">
	<FlowTitle slot="header">Stories</FlowTitle>

	<ul>
		{#each data.stories as story}
			<li>
				<FlowItemStory {story} />
			</li>
		{/each}
	</ul>

	<Cta
		button={{
			action: {
				href: ROUTES_STORIES,
			},
		}}
		slot="footer"
		text="Show all stories"
	/>
</Flow>

<Divider />

<Flow index="2">
	<FlowTitle slot="header">Projects</FlowTitle>

	<ul>
		{#each lastProjects as project}
			<li>
				<FlowItemProject {project} />
			</li>
		{/each}
	</ul>

	<Cta
		button={{
			action: {
				href: ROUTES_PROJECTS,
			},
		}}
		slot="footer"
		text="Show all projects"
	/>
</Flow>
