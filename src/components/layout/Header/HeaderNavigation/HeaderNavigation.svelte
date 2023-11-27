<script lang="ts">
	import NavigationItem from "./NavigationItem";
</script>

<!-- TODO: add uses & shorts -->
<nav class="1000:mt-7">
	<ul class="flex 1000:flex-col max-1000:gap-x-5">
		<NavigationItem action={{ href: "/" }}>Home</NavigationItem>

		<NavigationItem action={{ href: "/about" }}>About</NavigationItem>

		<NavigationItem action={{ href: "/stories" }}>Stories</NavigationItem>

		<NavigationItem action={{ href: "/projects" }}>Projects</NavigationItem>
	</ul>
</nav>
