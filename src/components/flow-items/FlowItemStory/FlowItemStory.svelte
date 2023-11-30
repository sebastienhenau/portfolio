<script lang="ts">
	import { FlowItem, Link, ListTags } from "$components";
	import { useStory } from "$hooks";
	import type { TStory } from "$types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let story: TStory;

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
			Read more
		</Link>
	</footer>
</FlowItem>
