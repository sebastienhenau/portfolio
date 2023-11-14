<script lang="ts">
	import { Tag } from "$components";
	import type {
		TCardMetadataDate,
		TCardMetadataNumber,
		TCardMetadataType,
	} from "./CardMetadata.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let number: TCardMetadataNumber = "";
	export let date: TCardMetadataDate;
	export let type: TCardMetadataType = "";
</script>

<div class="flex items-center">
	{#if number}
		<p
			class="border-r border-border text-accent font-semibold pr-5 mr-5 text-1"
		>
			{number}
		</p>
	{/if}

	<time
		class="flex-1 text-text-2 text-1"
		datetime=""
	>
		{date}
	</time>

	{#if !!type}
		<Tag>
			{type}
		</Tag>
	{/if}
</div>
