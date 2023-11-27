<script lang="ts">
	import clsx from "clsx";
	import type {
		TImageAlt,
		TImageBorder,
		TImageFit,
		TImageSrc,
	} from "./Image.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let src: TImageSrc;
	export let alt: TImageAlt = "";
	export let border: TImageBorder = false;
	export let fit: TImageFit = "cover";
</script>

<img
	{alt}
	class={clsx(
		{
			"border border-border rounded-lg": border,
			"object-center object-cover": fit === "cover",
			"object-center object-contain": fit === "cover",
		},
		$$props.class
	)}
	{src}
/>
