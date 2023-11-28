<script>
	import clsx from "clsx";
	import { Dot } from "$components";
</script>

<!-- TODO: create function to calculate center of line height: here 7px -->
<Dot
	class={clsx(
		"flow-dot absolute top-[0.4375rem] -translate-x-1/2",
		$$props.class
	)}
/>
