<script lang="ts">
	import clsx from "clsx";
	import { page } from "$app/stores";
	import "$styles/main.css";
	import {
		BottomRightPageRadialGradient,
		Header,
		TopLeftPageRadialGradient,
	} from "$components";

	// -------------------------------------------------------------------------
	// Reactive statements
	// -------------------------------------------------------------------------
	// TODO: set in different hook
	$: isHomePage = $page.url.pathname === "/";
</script>

<TopLeftPageRadialGradient />

<BottomRightPageRadialGradient />

<div
	class="relative z-10 row-start-1 row-end-2 stretch-container 1200:grid 1200:grid-rows-[auto_1fr] 1200:grid-cols-1"
>
	<Header />

	<main
		class={clsx("1200:col-start-1 1200:col-end-2", {
			"1200:row-start-1 1200:row-end-3": isHomePage,
		})}
	>
		<slot />
	</main>
</div>
