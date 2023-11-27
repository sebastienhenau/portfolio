<script lang="ts">
	import { Dot, Item } from "$components";
	import type { TFlowItemItem, TFlowItemTitle } from "./FlowItem.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let item: TFlowItemItem;
	export let title: TFlowItemTitle;
</script>

<!-- TODO: link width to left side of border -->
<!-- TODO: set 7px as 16 * 1.5 - 10 / 2 (size * line height - height / half) -->
<Item
	{...item}
	class="col-start-2 col-end-3 pl-[calc(2rem+0.5625rem)]"
>
	<div class="relative">
		<Dot
			class="absolute top-0 left-[calc(-1.5rem-9.5rem-2rem)] translate-x-[-150%] mt-[7px]"
		/>

		<h3 class="font-bold">
			{title}
		</h3>
	</div>

	<slot />
</Item>
