<script lang="ts">
	import clsx from "clsx";
	import type {
		TBlockDescription,
		TBlockSubtitle,
		TBlockTag,
		TBlockTitle,
	} from "./Block.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let title: TBlockTitle;
	export let subtitle: TBlockSubtitle = "";
	export let description: TBlockDescription;
	export let tag: TBlockTag = "div";
</script>

<svelte:element
	this={tag}
	class={clsx("pt-10", $$props.class)}
>
	<div class="max-w-[26rem]">
		<h1 class="text-text-1 text-7 font-semibold">
			{title}
		</h1>

		{#if !!subtitle}
			<p class="text-text-3 text-3">
				{subtitle}
			</p>
		{/if}

		<p class="text-text-2 mt-5 text-3">
			{description}
		</p>
	</div>

	<slot />
</svelte:element>
