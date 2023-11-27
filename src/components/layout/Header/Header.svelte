<script lang="ts">
	import HeaderLogo from "./HeaderLogo";
	import HeaderNavigation from "./HeaderNavigation";
</script>

<header
	class="col-start-1 col-end-2 row-start-1 row-end-2 1000:sticky 1000:top-0 1000:self-start max-1000:flex max-1000:justify-between max-1000:items-center py-7"
>
	<div class="flex justify-between items-center">
		<div class="flex items-center gap-4">
			<HeaderLogo />

			<!-- TODO: typo font style -->
			<div class="space-y-2">
				<p class="font-bold leading-none">Sébastien Henau</p>

				<!-- TODO: typo font style -->
				<p
					class="font-semibold text-3 leading-none text-site-contrast-2"
				>
					Front-end lead at Little Miss Robot
				</p>
			</div>
		</div>

		<!-- TODO: dark mode switcher -->
	</div>

	<HeaderNavigation />
</header>
