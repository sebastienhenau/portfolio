<script lang="ts">
	import clsx from "clsx";
	import { page } from "$app/stores";
	import HeaderLogo from "./HeaderLogo";
	import HeaderMainBorder from "./HeaderMainBorder";
	import HeaderSideBorder from "./HeaderSideBorder";
	import HeaderNavigationItem from "./HeaderNavigationItem";

	// -------------------------------------------------------------------------
	// Reactive statements
	// -------------------------------------------------------------------------
	// TODO: set in different hook
	$: isHomePage = $page.url.pathname === "/";
</script>

<!-- TODO: refine isHomePage classes -->
<header
	class={clsx(
		"sticky top-0 h-10 grid-rows-[1fr_1px] row-start-1 row-end-2 col-start-1 col-end-2 backdrop-blur-md z-40",
		{
			"1200:grid-cols-[1fr_45%_6.25rem] max-1200:container 1200:grid 1200:grid-cols-1":
				isHomePage,
			container: !isHomePage,
		}
	)}
>
	<nav
		class="row-start-1 row-end-2 col-start-1 col-end-2 flex items-center gap-6 h-full"
	>
		<HeaderLogo />

		<ul class="flex row-start-1 row-end-2 h-full">
			<HeaderNavigationItem action={{ href: "/" }}>
				Home
			</HeaderNavigationItem>

			<HeaderNavigationItem action={{ href: "/about" }}>
				About
			</HeaderNavigationItem>

			<HeaderNavigationItem action={{ href: "/stories" }}>
				Stories
			</HeaderNavigationItem>

			<HeaderNavigationItem action={{ href: "/projects" }}>
				Projects
			</HeaderNavigationItem>
		</ul>
	</nav>

	<HeaderMainBorder />

	{#if isHomePage}
		<HeaderSideBorder />
	{/if}
</header>
