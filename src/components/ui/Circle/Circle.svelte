<script lang="ts">
	import clsx from "clsx";
	import type { TCircleType } from "./Circle.types.js";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let type: TCircleType;
</script>

<div class={clsx("relative aspect-square overflow-hidden", $$props.class)}>
	<svg
		class={clsx("absolute", {
			"top-0 left-0": type === "tl",
			"top-0 right-0": type === "tr",
			"bottom-0 right-0": type === "br",
			"bottom-0 left-0": type === "bl",
		})}
		height="200%"
		viewBox="0 0 100 100"
		width="200%"
	>
		<defs>
			<radialGradient
				gradientTransform="translate(-1 -1) scale(2, 2)"
				id="0"
			>
				<stop
					offset="10%"
					stop-color="hsl(var(--color-accent))"
				/>
				<stop
					offset="100%"
					stop-color="transparent"
				/>
			</radialGradient>
		</defs>

		<circle
			cx="50"
			cy="50"
			fill="none"
			r="49.5"
			stroke="hsl(var(--color-border))"
			vector-effect="non-scaling-stroke"
		/>

		<circle
			cx="50"
			cy="50"
			fill="none"
			r="49.5"
			stroke="url(#0)"
			vector-effect="non-scaling-stroke"
		/>
	</svg>
</div>
