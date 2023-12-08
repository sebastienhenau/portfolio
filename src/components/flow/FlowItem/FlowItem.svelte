<script lang="ts">
	import clsx from "clsx";
	import { Dot, Item } from "$components";
	import type { TFlowItemItem, TFlowItemTitle } from "./FlowItem.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let item: TFlowItemItem;
	export let title: TFlowItemTitle;
</script>

<Item
	{...item}
	class="flow-item flow-item-pl"
>
	<h3 class={clsx("font-bold relative", $$props.class)}>
		<Dot class="flow-item-dot absolute top-[0.4375rem] -translate-x-1/2" />

		{title}
	</h3>

	<slot />
</Item>
