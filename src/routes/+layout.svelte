<script lang="ts">
	import "$styles/main.css";
	import { Header, TopLeftPageRadialGradient } from "$components";
</script>

<div
	class="stretch-container row-start-1 row-end-2 1000:grid 1000:grid-cols-[1fr_65%] 1200:grid-cols-[1fr_51rem] grid-rows-1 gap-x-10"
>
	<Header />

	<main class="pb-7 1000:py-7">
		<slot />
	</main>
</div>

<TopLeftPageRadialGradient />
