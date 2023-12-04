<script lang="ts">
	import { FlowItem, Link, LinkIcon, LinkText, ListTags } from "$components";
	import { useStory } from "$hooks";
	import type { TFlowItemStoryStory } from "./FlowItemStory.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let story: TFlowItemStoryStory;

	// -------------------------------------------------------------------------
	// Hooks
	// -------------------------------------------------------------------------
	const { storyRoute } = useStory(story);

	// -------------------------------------------------------------------------
	// Variables
	// -------------------------------------------------------------------------
	const { title, image, date, description, tags } = story;
</script>

<FlowItem
	item={{
		image: {
			border: true,
			src: image,
			alt: title,
		},
	}}
	{title}
>
	<time
		class="text-site-contrast-2 text-3 block"
		datetime=""
	>
		{date}
	</time>

	<p class="mt-4">
		{description}
	</p>

	<footer class="mt-7 flex justify-between gap-x-7">
		<ListTags items={tags} />

		<Link
			action={{
				href: storyRoute,
			}}
		>
			<LinkText>Read more</LinkText>

			<LinkIcon
				class="w-6"
				icon={{ name: "ChevronRight" }}
			/>
		</Link>
	</footer>
</FlowItem>
