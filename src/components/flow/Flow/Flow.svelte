<script lang="ts"></script>

<!--  TODO: link width to badge -->
<div class="flow grid grid-cols-[1.25rem_1fr] grid-rows-1">
	<!-- TODO: fix h-full issue -->
	<div
		class="col-start-1 col-end-2 row-start-1 row-end-2 w-[2px] rounded-full bg-border justify-self-center h-full"
	/>

	<div class="col-span-full row-span-full">
		<slot />
	</div>
</div>
