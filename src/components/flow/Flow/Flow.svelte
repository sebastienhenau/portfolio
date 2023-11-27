<script lang="ts">
	import clsx from "clsx";
</script>

<!--  TODO: link width to badge -->
<div class="grid grid-cols-[1.25rem_1fr] grid-rows-1">
	<!-- TODO: fix h-full issue -->
	<div
		class="col-start-1 col-end-2 row-start-1 row-end-2 w-[2px] rounded-full bg-border justify-self-center h-full"
	/>

	<div
		class={clsx("col-end-3 row-start-1 row-end-2 space-y-7", {
			"col-start-1": $$slots.default,
			"col-start-2": !!$$slots.default && $$slots.content,
		})}
	>
		{#if $$slots.default}
			<slot />
		{/if}

		{#if !!$$slots.default && $$slots.content}
			<slot name="content" />
		{/if}
	</div>
</div>
