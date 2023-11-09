<script lang="ts">
	import { clsx } from "clsx";
	import type { TAction } from "$components";
	import { Action } from "$components";
	import { page } from "$app/stores";
	import NavigationItemBottomBorder from "./NavigationItemBottomBorder";
	import NavigationItemBottomGradient from "./NavigationItemBottomGradient";
	import NavigationItemBottomLeftLine from "./NavigationItemBottomLeftLine";
	import NavigationItemBottomRightLine from "./NavigationItemBottomRightLine";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let action: TAction;

	// -------------------------------------------------------------------------
	// Reactive statements
	// -------------------------------------------------------------------------
	$: isActive = $page.url.pathname === action.href;
</script>

<li class="grid grid-cols-[auto_1fr_auto] grid-rows-[1fr_auto]">
	{#if isActive}
		<NavigationItemBottomBorder />

		<NavigationItemBottomGradient />

		<NavigationItemBottomLeftLine />

		<NavigationItemBottomRightLine />
	{/if}

	<Action
		{...action}
		class={clsx(
			"inline-flex items-center px-5 row-start-1 row-end-3 col-start-1 col-end-3 text-2 font-semibold hover:text-accent transition-colors",
			{
				"text-accent": isActive,
			}
		)}
	>
		<slot />
	</Action>
</li>
