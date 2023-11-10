<script lang="ts">
	import { clsx } from "clsx";
	import type { TLineType } from "$components";
	import { Line } from "$components";
	import type {
		TCornerRelative,
		TCornerTheme,
		TCornerType,
	} from "./Corner.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let type: TCornerType;
	export let theme: TCornerTheme = "default";
	export let relative: TCornerRelative = true;

	// -------------------------------------------------------------------------
	// Variables
	// -------------------------------------------------------------------------
	const horizontalLineType = clsx({
		left: type === "tl" || type === "bl",
		right: type === "tr" || type === "br",
	}) as TLineType;

	const verticalLineType = clsx({
		top: type === "tl" || type === "tr",
		bottom: type === "br" || type === "bl",
	}) as TLineType;
</script>

<span
	class={clsx(
		"pointer-events-none min-w-[10px] min-h-[10px] inline-grid",
		{
			"grid-cols-[auto_1fr] grid-rows-[auto_1fr]": type === "tl",
			"grid-cols-[1fr_auto] grid-rows-[1fr_auto]":
				type === "tr" || type === "br",
			"grid-cols-[auto_1fr] grid-rows-[1fr_auto]": type === "bl",
			absolute: !relative,
			"top-0 left-0": !relative && type === "tl",
			"top-0 right-0": !relative && type === "tr",
			"bottom-0 right-0": !relative && type === "br",
			"bottom-0 left-0": !relative && type === "bl",
		},
		$$props.class
	)}
>
	<Line
		class={clsx({
			"col-start-1 col-end-3 row-start-1 row-end-2":
				type === "tl" || type === "tr",
			"col-start-1 col-end-3 row-start-2 row-end-3":
				type === "br" || type === "bl",
		})}
		{theme}
		type={horizontalLineType}
	/>

	<Line
		class={clsx({
			"col-start-1 col-end-2 row-start-1 row-end-3":
				type === "tl" || type === "bl",
			"col-start-2 col-end-3 row-start-1 row-end-3":
				type === "tr" || type === "br",
		})}
		{theme}
		type={verticalLineType}
	/>
</span>
