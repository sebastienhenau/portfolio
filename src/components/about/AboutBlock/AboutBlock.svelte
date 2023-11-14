<script lang="ts">
	import clsx from "clsx";
</script>

<div
	class={clsx(
		"max-w-[960px] mx-auto 1000:border-l 1000:border-r 1000:border-border",
		$$props.class
	)}
>
	<div class="max-w-[700px] mx-auto">
		<slot />
	</div>
</div>
