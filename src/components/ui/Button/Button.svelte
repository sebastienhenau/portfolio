<script lang="ts">
	import clsx from "clsx";
	import { Action } from "$components";
	import type { TButtonAction } from "./Button.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let action: TButtonAction;
</script>

<Action
	{...action}
	class={clsx(
		"inline-flex justify-center items-center gap-3 relative py-3 px-6",
		$$props.class
	)}
>
	<div
		class="absolute inset-0 z-0 bg-accent rounded-lg translate-x-2 translate-y-2"
	/>

	<div class="absolute inset-0 z-0 border border-border-alt rounded-lg" />

	<slot />
</Action>
