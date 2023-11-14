<script lang="ts">
	import clsx from "clsx";
	import { Line } from "$components";

	// TODO: rename & restructure
	export let extend = false;
</script>

<div
	class={clsx(
		"700:grid",
		{
			"700:grid-cols-[minmax(30px,1fr)_min(700px,100%-60px)_minmax(30px,1fr)]":
				!extend,
			"700:grid-cols-[minmax(30px,1fr)_min(1060px,100%-60px)_minmax(30px,1fr)]":
				extend,
		},
		$$props.class
	)}
>
	<div class="max-700:hidden flex flex-col justify-between">
		<Line
			theme="border"
			type="right"
		/>

		<Line
			theme="border"
			type="right"
		/>
	</div>

	<div class="border border-border max-700:max-w-[640px] max-700:mx-auto">
		<slot />
	</div>

	<div class="max-700:hidden flex flex-col justify-between">
		<Line
			theme="border"
			type="left"
		/>

		<Line
			theme="border"
			type="left"
		/>
	</div>
</div>
