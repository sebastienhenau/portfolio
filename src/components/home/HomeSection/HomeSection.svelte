<script lang="ts">
	import clsx from "clsx";
	import { Corner, Line } from "$components";
	import type {
		THomeSectionTitle,
		THomeSectionTopDivider,
	} from "./HomeSection.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let title: THomeSectionTitle;
	export let topDivider: THomeSectionTopDivider = true;
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
		<Corner
			class={clsx("w-[100px] h-[150px]", {
				"1200:hidden": !topDivider,
			})}
			relative={false}
			type="tl"
		/>

		<Corner
			class={clsx("w-[100px] h-[150px]", {
				"1200:hidden": !topDivider,
			})}
			relative={false}
			type="tr"
		/>

		{#if !topDivider}
			<Line
				class="absolute top-0 left-0 h-[150px] max-1200:hidden"
				type="top"
			/>

			<Line
				class="absolute top-0 right-0 h-[150px] max-1200:hidden"
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
