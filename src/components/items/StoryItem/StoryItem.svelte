<script lang="ts">
	import { Item, Link, ListTags } from "$components";
	import type {
		TStoryItemDate,
		TStoryItemDescription,
		TStoryItemItem,
		TStoryItemLink,
		TStoryItemListTags,
		TStoryItemTitle,
	} from "./StoryItem.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let item: TStoryItemItem;
	export let title: TStoryItemTitle;
	export let date: TStoryItemDate;
	export let description: TStoryItemDescription;
	export let listTags: TStoryItemListTags;
	export let link: TStoryItemLink;
</script>

<Item {...item}>
	<h3 class="font-bold">{title}</h3>

	<!-- TODO: datetime -->
	<time
		class="block text-3 text-site-contrast-2 leading-none"
		datetime=""
	>
		{date}
	</time>

	<p class="mt-3">{description}</p>

	<div class="mt-6 flex justify-between gap-x-7">
		{#if !!listTags}
			<ListTags {...listTags} />
		{/if}

		<Link {...link}>Read more</Link>
	</div>
</Item>
