<script lang="ts">
	import type { TFlowItemProjectProject } from "./FlowItemProject.types";
	import { FlowItem, Link, LinkIcon, LinkText, ListTags } from "$components";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let project: TFlowItemProjectProject;

	// -------------------------------------------------------------------------
	// Variables
	// -------------------------------------------------------------------------
	const { name, image, company, role, date, technologies, link } = project;
</script>

<FlowItem
	item={{
		image: {
			border: true,
			src: image,
			alt: name,
		},
	}}
	title={name}
>
	<ul class="space-y-2 mt-2">
		<li class="text-site-contrast-2">
			<time
				class="text-inherit block"
				datetime=""
			>
				{date}
			</time>
		</li>

		<li class="text-site-contrast-2">
			Made at {company}
		</li>

		<li class="text-site-contrast-2">
			{role}
		</li>
	</ul>

	<footer class="mt-7 flex justify-between gap-x-7">
		<ListTags items={technologies} />

		<Link
			action={{
				href: link,
				target: "_blank",
			}}
		>
			<LinkText>Check it out</LinkText>

			<LinkIcon
				class="w-6"
				icon={{ name: "ChevronRight" }}
			/>
		</Link>
	</footer>
</FlowItem>
