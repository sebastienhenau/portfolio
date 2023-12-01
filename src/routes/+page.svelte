<script lang="ts">
	import {
		Badge,
		Cta,
		Divider,
		Flow,
		FlowItemProject,
		FlowItemStory,
		FlowTitle,
		HomeAboutCard,
	} from "$components";
	import { useProjects, useStories } from "$hooks";
	import { ROUTES_PROJECTS, ROUTES_STORIES } from "$constants";

	// -------------------------------------------------------------------------
	// Hooks
	// -------------------------------------------------------------------------
	const { storiesAmount, latestStories } = useStories();
	const { projectsAmount, latestProjects } = useProjects();
</script>

<HomeAboutCard />

<Divider />

<Flow index="1">
	<div
		class="flex items-center gap-x-5"
		slot="header"
	>
		<Badge theme="accent">{storiesAmount}</Badge>

		<FlowTitle>Stories</FlowTitle>
	</div>

	<ul>
		{#each latestStories as story}
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
	<div
		class="flex items-center gap-x-5"
		slot="header"
	>
		<Badge theme="accent">{projectsAmount}</Badge>

		<FlowTitle>Projects</FlowTitle>
	</div>

	<ul>
		{#each latestProjects as project}
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
