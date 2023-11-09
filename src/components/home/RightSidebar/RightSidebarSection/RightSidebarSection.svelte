<script lang="ts">
	import { Line } from "$components";
	import type { TRightSidebarSectionTitle } from "./RightSidebarSection.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let title: TRightSidebarSectionTitle;
</script>

<li class="grid grid-rows-[auto_1fr]">
	<div
		class="1200:sticky 1200:top-0 z-20 col-start-1 col-end-2 row-start-1 row-end-2 grid grid-cols-[auto_1fr_auto]"
	>
		<Line
			class="col-start-1 col-end-2 row-start-1 row-end-2"
			type="bottom"
		/>

		<Line
			class="col-start-3 col-end-4 row-start-1 row-end-2"
			type="bottom"
		/>

		<Line
			class="absolute bottom-0 left-0 translate-y-full h-[100px]"
			type="top"
		/>

		<Line
			class="absolute bottom-0 right-0 translate-y-full h-[100px]"
			type="top"
		/>

		<h2
			class="col-start-2 col-end-3 row-start-1 row-end-2 border-b border-accent bg-accent/10 text-accent font-semibold px-4 py-3 1200:backdrop-blur-md"
		>
			{title}
		</h2>
	</div>

	<div class="relative z-10 col-start-1 col-end-2 row-start-2 row-end-3">
		<slot />
	</div>
</li>
