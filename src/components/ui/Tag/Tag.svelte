<script lang="ts">
	import clsx from "clsx";
	import { Corner } from "$components";
	import type { TTagTheme } from "./Tag.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let theme: TTagTheme = "default";
</script>

<p
	class={clsx(
		"inline-block relative py-2 px-3 uppercase text-1 font-semibold",
		{
			"bg-accent/20 shadow-border shadow-accent/20": theme === "default",
			"bg-text-3/20 shadow-border shadow-text-3/20": theme === "text-3",
		},
		$$props.class
	)}
>
	<Corner
		relative={false}
		{theme}
		type="tl"
	/>

	<Corner
		relative={false}
		{theme}
		type="tr"
	/>

	<Corner
		relative={false}
		{theme}
		type="br"
	/>

	<Corner
		relative={false}
		{theme}
		type="bl"
	/>

	<span
		class={clsx({
			"text-accent": theme === "default",
			"text-text-3": theme === "text-3",
		})}
	>
		<slot />
	</span>
</p>
