<script lang="ts">
	import clsx from "clsx";
	import { Action } from "$components";
	import type { TLinkAction } from "./Link.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let action: TLinkAction;
</script>

<Action
	{...action}
	class={clsx("font-bold text-accent leading-none", $$props.class)}
>
	<slot />
</Action>
