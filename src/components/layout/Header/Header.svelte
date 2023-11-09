<script lang="ts">
	import clsx from "clsx";
	import HeaderLeftBorder from "./HeaderLeftBorder";
	import HeaderRightBorder from "./HeaderRightBorder";
	import HeaderLogo from "./HeaderLogo";
	import HeaderNavigationItem from "./HeaderNavigationItem";
</script>

<header
	class={clsx(
		"row-start-1 row-end-2 sticky top-0 h-10 grid grid-rows-[1fr_1px]",
		$$props.class
	)}
>
	<HeaderLeftBorder />

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
</header>

<HeaderRightBorder />
