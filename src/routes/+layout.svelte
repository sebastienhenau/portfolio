<script>
	import "$styles/main.css";
	import Header from "$components/Header/Header.svelte";
</script>

<div
	class="row-start-1 row-end-2 stretch-bound bg-gradient-radial-tl from-site-2 to-transparent from-0% to-70%"
/>

<div
	class="row-start-1 row-end-2 stretch-bound bg-gradient-radial-br from-site-2 to-transparent from-0% to-70%"
/>

<div
	class="row-start-1 row-end-2 stretch-container grid grid-cols-[1fr_var(--layout-sidebar-width,_0)] grid-rows-[auto_1fr]"
>
	<Header class="row-start-1 row-end-2 col-start-1 col-end-2" />

	<main
		class="row-start-1 row-end-3 col-start-1 col-end-3 grid grid-cols-[1fr_var(--layout-sidebar-width,_0)]"
	>
		<slot />
	</main>
</div>
