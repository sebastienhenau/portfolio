<script lang="ts">
	import clsx from "clsx";
</script>

<div class={clsx("relative w-[1rem] h-[1rem]", $$props.class)}>
	<div class="absolute inset-0 rounded-full bg-border translate-y-1" />

	<div
		class="absolute inset-0 rounded-full bg-site-background border border-border"
	/>
</div>
