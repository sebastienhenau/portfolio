<script>
	import Action from "$components/Action.svelte";
	import Image from "$components/Image.svelte";
	import NavigationItem from "$components/Header/NavigationItem.svelte";
</script>

<header class={`border-b border-border pt-3 ${$$props.class}`}>
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
