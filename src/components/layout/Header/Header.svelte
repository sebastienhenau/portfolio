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

<header
	class={clsx(
		"sticky top-0 h-10 grid grid-rows-[1fr_1px] grid-cols-1 row-start-1 row-end-2 col-start-1 col-end-2 max-1200:container max-1200:backdrop-blur-md max-1200:z-50",
		{
			"1200:grid-cols-[1fr_45%_6.25rem]": isHomePage,
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

<!--<header
	class={clsx(
		"1200:row-start-1 1200:row-end-2 1200:col-start-1 1200:col-end-2 sticky top-0 h-10 grid grid-rows-[1fr_1px] max-1200:container max-1200:backdrop-blur-md max-1200:z-50",
		$$props.class
	)}
>
	<HeaderBorder />

	<nav
		class="flex items-center gap-6 h-full row-start-1 row-end-3 col-start-1 col-end-2"
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
</header>-->
