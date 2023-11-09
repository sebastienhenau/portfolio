<script lang="ts">
	import clsx from "clsx";
	import type {
		TIntroDescription,
		TIntroSubtitle,
		TIntroTag,
		TIntroTitle,
	} from "./Intro.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let title: TIntroTitle;
	export let subtitle: TIntroSubtitle = "";
	export let description: TIntroDescription;
	export let tag: TIntroTag = "div";
</script>

<svelte:element
	this={tag}
	class={clsx("pt-10 max-w-[26rem]", $$props.class)}
>
	<h1 class="text-text-1 text-7 font-semibold">
		{title}
	</h1>

	{#if !!subtitle}
		<p class="text-text-3 text-3 mt-2">
			{subtitle}
		</p>
	{/if}

	<p class="text-text-2 mt-5 text-3">
		{description}
	</p>

	<slot />
</svelte:element>
