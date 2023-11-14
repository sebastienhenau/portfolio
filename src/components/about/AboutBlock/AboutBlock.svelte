<script lang="ts">
	import clsx from "clsx";
</script>

<div
	class={clsx(
		"max-w-[920px] mx-auto 1000:border-l 1000:border-r 1000:border-border",
		$$props.class
	)}
>
	<div class="max-w-[640px] mx-auto">
		<slot />
	</div>
</div>
