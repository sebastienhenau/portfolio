<script lang="ts">
	import { FlowSubtitle, Item } from "$components";
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
	<FlowSubtitle>
		{title}
	</FlowSubtitle>

	<slot />
</Item>
