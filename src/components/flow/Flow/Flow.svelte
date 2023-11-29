<script lang="ts">
	import clsx from "clsx";
	import { Badge } from "$components";
	import type { TFlowIndex } from "./Flow.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let index: TFlowIndex = undefined;
</script>

<section
	class={clsx(
		"flow grid flow-grid-cols grid-rows-3-auto items-start",
		$$props.class
	)}
>
	{#if !!index}
		<Badge class="col-start-1 col-end-3 row-start-1 row-end-2 self-center">
			{index}
		</Badge>
	{/if}

	<header
		class="col-start-3 col-end-4 row-start-1 row-end-2 pl-7 self-center"
	>
		<slot name="header" />
	</header>

	<div
		class={clsx(
			"col-start-1 col-end-3 row-end-4 flow-line-w rounded-full bg-border self-stretch justify-self-center pointer-events-none",
			{
				"row-start-2": !!index,
				"row-start-1": !index,
			}
		)}
	/>

	<div class="row-start-2 row-end-3 col-start-2 col-end-4 mt-5">
		<slot />
	</div>

	{#if $$slots.footer}
		<footer class="col-start-3 col-end-4 row-start-3 row-end-4 pl-7 mt-7">
			<slot name="footer" />
		</footer>
	{/if}
</section>
