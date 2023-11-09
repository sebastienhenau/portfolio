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
	class="relative z-10 row-start-1 row-end-2 1200:grid 1200:grid-rows-[auto_1fr] 1200:grid-cols-[1fr_37rem] stretch-container"
>
	<Header />

	<main
		class="1200:row-start-2 1200:row-end-3 1200:col-start-1 1200:col-end-3"
	>
		<slot />
	</main>
</div>
