<script>
	import { Action, Image } from "$components";

	import NavigationItem from "./NavigationItem.svelte";
</script>

<header
	class={`row-start-1 row-end-2 border-b border-border sticky top-0 ${$$props.class}`}
>
	<nav class="flex">
		<Action href="/">
			<Image
				alt="Sébastien Henau"
				src="/images/logo.svg"
			/>
		</Action>

		<ul class="flex gap-5 row-start-1 row-end-2">
			<li>
				<NavigationItem action={{ href: "/" }}>Home</NavigationItem>
			</li>

			<li>
				<NavigationItem action={{ href: "/about" }}>
					About
				</NavigationItem>
			</li>

			<li>
				<NavigationItem action={{ href: "/stories" }}>
					Stories
				</NavigationItem>
			</li>

			<li>
				<NavigationItem action={{ href: "/projects" }}>
					Projects
				</NavigationItem>
			</li>
		</ul>
	</nav>
</header>

<div class="row-start-1 row-end-2 border-b border-border" />
