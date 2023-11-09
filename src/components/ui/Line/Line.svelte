<script lang="ts">
	import clsx from "clsx";
	import type { TLineTheme, TLineType } from "./Line.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let type: TLineType;
	export let theme: TLineTheme = "default";
</script>

<span
	class={clsx(
		"inline-block to-transparent pointer-events-none",
		{
			"w-[1px] max-w-[1px] min-h-[10px] bg-gradient-to-b": type === "top",
			"min-w-[10px] h-[1px] max-h-[1px] bg-gradient-to-l":
				type === "right",
			"w-[1px] max-w-[1px] min-h-[10px] bg-gradient-to-t":
				type === "bottom",
			"min-w-[10px] h-[1px] max-h-[1px] bg-gradient-to-r":
				type === "left",
			"from-accent": theme === "default",
			"from-text-3": theme === "text-3",
		},
		$$props.class
	)}
/>
