<script lang="ts">
	import "$styles/main.css";
	import {
		BottomRightPageRadialGradient,
		Header,
		TopLeftPageRadialGradient,
	} from "$components";
</script>

<TopLeftPageRadialGradient />

<BottomRightPageRadialGradient />

<div
	class="relative z-10 row-start-1 row-end-2 grid grid-rows-[auto_1fr] grid-cols-[1fr_37rem] stretch-container"
>
	<Header />

	<main class="row-start-2 row-end-3 col-start-1 col-end-3">
		<slot />
	</main>
</div>
