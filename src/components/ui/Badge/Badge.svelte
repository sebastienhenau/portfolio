<script lang="ts">
	import clsx from "clsx";
	import type { TBadgeTheme } from "./Badge.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let theme: TBadgeTheme = "default";
</script>

<div
	class={clsx(
		"flex justify-center items-center border border-border rounded w-[1.25rem] h-[1.25rem]",
		{
			"bg-site-background": theme === "default",
			"bg-accent": theme === "accent",
		},
		$$props.class
	)}
>
	<p
		class={clsx("leading-none text-2 font-bold", {
			"text-accent-contrast": theme === "accent",
		})}
	>
		<slot />
	</p>
</div>
