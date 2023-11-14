<script lang="ts">
	import { getContext, onMount } from "svelte";
	import clsx from "clsx";
	import type { TActionWrapperContext } from "$components";
	import type {
		TActionElement,
		TActionHref,
		TActionTarget,
		TActionType,
	} from "./Action.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let href: TActionHref = "";
	export let type: TActionType = "button";
	export let target: TActionTarget = null;

	// -------------------------------------------------------------------------
	// DOM refs
	// -------------------------------------------------------------------------
	let element: TActionElement;

	// -------------------------------------------------------------------------
	// Context getters
	// -------------------------------------------------------------------------
	const actionWrapper: TActionWrapperContext = getContext("actionWrapper");

	// -------------------------------------------------------------------------
	// Variables
	// -------------------------------------------------------------------------
	const classList = clsx(
		{
			"before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full":
				!!actionWrapper,
		},
		$$props.class
	);

	// -------------------------------------------------------------------------
	// Life cycles
	// -------------------------------------------------------------------------
	onMount(() => {
		if (actionWrapper) {
			actionWrapper.setElement(element);
		}
	});
</script>

{#if !!href}
	<a
		bind:this={element}
		class={classList}
		{href}
		{target}
		rel={target
			? clsx({
					"noopener noreferer": target === "_blank",
			  })
			: null}
	>
		<slot />
	</a>
{:else}
	<button
		bind:this={element}
		class={classList}
		{type}
		on:click
	>
		<slot />
	</button>
{/if}
