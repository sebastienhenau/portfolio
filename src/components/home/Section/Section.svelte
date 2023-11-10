<script lang="ts">
	import clsx from "clsx";
	import { Corner, Line } from "$components";
	import type { TSectionTitle } from "./Section.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let title: TSectionTitle;
	export let topDivider = true;
</script>

<div>
	<div
		class={clsx(
			"sticky z-20 1200:backdrop-blur-md border-b border-border bg-accent/10",
			{
				"top-0": !topDivider,
				"border-t top-[-2px]": topDivider,
			}
		)}
	>
		{#if topDivider}
			<Corner
				class="w-[100px] h-[150px] pointer-events-none"
				relative={false}
				type="tl"
			/>

			<Corner
				class="w-[100px] h-[150px] pointer-events-none"
				relative={false}
				type="tr"
			/>
		{:else}
			<Line
				class="absolute top-0 left-0 h-[150px]"
				type="top"
			/>

			<Line
				class="absolute top-0 right-0 h-[150px]"
				type="top"
			/>
		{/if}

		<h2 class="px-4 py-3 text-accent font-semibold">
			{title}
		</h2>
	</div>

	<div class="relative z-10">
		<slot />
	</div>
</div>
