<script lang="ts">
	import { FlowItem, Link, ListTags } from "$components";
	import type {
		TFlowItemStoryDate,
		TFlowItemStoryDescription,
		TFlowItemStoryFlowItem,
		TFlowItemStoryLink,
		TFlowItemStoryListTags,
	} from "./FlowItemStory.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let flowItem: TFlowItemStoryFlowItem;
	export let date: TFlowItemStoryDate;
	export let description: TFlowItemStoryDescription;
	export let listTags: TFlowItemStoryListTags;
	export let link: TFlowItemStoryLink;
</script>

<FlowItem {...flowItem}>
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
		<ListTags {...listTags} />

		<Link {...link}>Read more</Link>
	</footer>
</FlowItem>
