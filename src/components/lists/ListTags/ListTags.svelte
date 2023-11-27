<script lang="ts">
	import { Tag } from "$components";
	import type { TListTagsItems } from "./ListTags.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let items: TListTagsItems = [];
</script>

<ul class="flex flex-wrap gap-3">
	{#each items as item}
		<li>
			<Tag>
				{item}
			</Tag>
		</li>
	{/each}
</ul>
