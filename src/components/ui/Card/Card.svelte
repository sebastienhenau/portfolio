<script lang="ts">
	import clsx from "clsx";
	import { Image } from "$components";
	import type { TCardImage } from "./Card.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let image: TCardImage;
</script>

<article
	class={clsx(
		"relative p-7",
		{
			"flex items-start gap-x-7": !!image,
		},
		$$props.class
	)}
>
	<div
		class="absolute inset-0 z-0 bg-accent border border-border-alt rounded-lg translate-x-3 translate-y-3"
	/>

	<div
		class="absolute inset-0 z-0 bg-site-background border border-border-alt rounded-lg"
	/>

	{#if !!image}
		<Image
			{...image}
			class="max-w-[15%] w-full z-10"
		/>
	{/if}

	<div class="relative z-10">
		<slot />
	</div>
</article>
