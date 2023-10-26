<script>
	import "$styles/main.css";
	import Header from "$components/Header.svelte";
</script>

<div
	class="row-start-1 row-end-3 stretch-bound bg-gradient-radial-tl from-site-2 to-transparent from-0% to-70%"
/>

<div
	class="row-start-1 row-end-3 stretch-bound bg-gradient-radial-br from-site-2 to-transparent from-0% to-70%"
/>

<Header class="row-start-1 row-end-3 stretch-container" />

<main class="row-start-2 row-end-3 stretch-container">
	<slot />
</main>
