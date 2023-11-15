<script lang="ts">
	import clsx from "clsx";
	import type { TAction } from "$components";
	import { Action, Corner } from "$components";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let action: TAction = {};
</script>

<Action
	{...action}
	class={clsx(
		"relative p-5 bg-accent group hover:bg-accent/20 transition-colors shadow-border shadow-accent/40 inline-flex justify-center items-center text-center",
		$$props.class
	)}
>
	<!-- TODO: optimise this with card component -->
	<Corner
		class="opacity-0 group-hover:translate-y-[-4px] group-hover:translate-x-[-4px] group-hover:opacity-100 transition"
		relative={false}
		type="tl"
	/>

	<Corner
		class="opacity-0 group-hover:translate-y-[-4px] group-hover:translate-x-[4px] group-hover:opacity-100 transition"
		relative={false}
		type="tr"
	/>

	<Corner
		class="opacity-0 group-hover:translate-y-[4px] group-hover:translate-x-[4px] group-hover:opacity-100 transition"
		relative={false}
		type="br"
	/>

	<Corner
		class="opacity-0 group-hover:translate-y-[4px] group-hover:translate-x-[-4px] group-hover:opacity-100 transition"
		relative={false}
		type="bl"
	/>

	<slot />
</Action>
