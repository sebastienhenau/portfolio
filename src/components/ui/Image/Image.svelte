<script lang="ts">
	import type { TImageAlt, TImageSrc } from "./Image.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let src: TImageSrc;
	export let alt: TImageAlt = "";
</script>

<img
	{alt}
	{src}
/>
