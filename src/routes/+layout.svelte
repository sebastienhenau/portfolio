<script>
	import "$styles/main.css";
	import { Header } from "$components";
</script>

<!--<div
	class="row-start-1 row-end-2 stretch-bound bg-gradient-radial-tl from-site-2 to-transparent from-0% to-70%"
/>

<div
	class="row-start-1 row-end-2 stretch-bound bg-gradient-radial-br from-site-2 to-transparent from-0% to-70%"
/>

<div
	class="row-start-1 row-end-2 stretch-container grid grid-cols-[1fr_var(&#45;&#45;layout-sidebar-width,_0)] grid-rows-[auto_1fr]"
>
	<Header class="row-start-1 row-end-2 col-start-1 col-end-2" />

	<main
		class="row-start-1 row-end-3 col-start-1 col-end-3 grid grid-cols-[1fr_var(&#45;&#45;layout-sidebar-width,_0)]"
	>
		<slot />
	</main>
</div>-->

<div
	class="row-start-1 row-end-2 stretch-bound bg-gradient-radial-tl from-site-2 to-transparent from-0% to-70%"
/>

<div
	class="row-start-1 row-end-2 stretch-bound bg-gradient-radial-br from-site-2 to-transparent from-0% to-70%"
/>

<div
	class="row-start-1 row-end-2 grid grid-rows-[auto_1fr] grid-cols-[1fr_32rem] stretch-container"
>
	<Header />

	<main class="row-start-2 row-end-3 col-start-1 col-end-3">
		<slot />
	</main>
</div>
