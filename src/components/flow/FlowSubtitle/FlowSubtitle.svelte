<script lang="ts">
	import clsx from "clsx";
	import { Dot } from "$components";
</script>

<h3 class={clsx("font-bold relative", $$props.class)}>
	<Dot class="flow-subtitle-dot absolute top-[0.4375rem] -translate-x-1/2" />

	<slot />
</h3>
