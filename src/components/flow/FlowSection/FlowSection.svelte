<script lang="ts">
	import clsx from "clsx";
	import { Badge } from "$components";
	import type { TFlowSectionIndex } from "./FlowSection.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let index: TFlowSectionIndex;
</script>

<!--  TODO: link width to badge -->
<section
	class={clsx(
		"flow-section grid flow-section-grid-cols grid-rows-3-auto items-start",
		$$props.class
	)}
>
	<Badge class="col-start-1 col-end-3 row-start-1 row-end-2 self-center">
		{index}
	</Badge>

	<header
		class="col-start-3 col-end-4 row-start-1 row-end-2 pl-7 self-center"
	>
		<slot name="header" />
	</header>

	<div class="row-span-1 col-start-2 col-end-4 mt-5">
		<slot />
	</div>

	{#if $$slots.footer}
		<footer class="col-start-3 col-end-4 row-span-1 pl-7 mt-7">
			<slot name="footer" />
		</footer>
	{/if}
</section>
