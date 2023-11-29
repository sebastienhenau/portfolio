<script lang="ts">
	import clsx from "clsx";
	import { Dot } from "$components";
</script>

<h3 class="font-bold relative">
	<Dot
		class={clsx(
			"flow-subtitle-dot absolute top-[0.4375rem] -translate-x-1/2",
			$$props.class
		)}
	/>

	<slot />
</h3>
