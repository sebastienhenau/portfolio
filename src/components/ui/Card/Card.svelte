<script lang="ts">
	import { getContext } from "svelte";
	import type { TActionWrapperContext } from "$components";
	import { Corner } from "$components";

	// -------------------------------------------------------------------------
	// Context getters
	// -------------------------------------------------------------------------
	const actionWrapper: TActionWrapperContext = getContext("actionWrapper");
</script>

<article class={`p-8 ${$$props.class}`}>
	{#if !!actionWrapper}
		<div
			class="absolute inset-0 pointer-events-none bg-gradient-to-l from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
		/>

		<Corner
			class="opacity-0 group-hover:translate-y-[-8px] group-hover:translate-x-[-16px] group-hover:opacity-100 transition"
			relative={false}
			type="tl"
		/>

		<Corner
			class="opacity-0 group-hover:translate-y-[-8px] group-hover:translate-x-[16px] group-hover:opacity-100 transition"
			relative={false}
			type="tr"
		/>

		<Corner
			class="opacity-0 group-hover:translate-y-[8px] group-hover:translate-x-[16px] group-hover:opacity-100 transition"
			relative={false}
			type="br"
		/>

		<Corner
			class="opacity-0 group-hover:translate-y-[8px] group-hover:translate-x-[-16px] group-hover:opacity-100 transition"
			relative={false}
			type="bl"
		/>
	{/if}

	<slot />
</article>
