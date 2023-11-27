<script>
	import { Button, ButtonText, Card } from "$components";
</script>

<!-- TODO: add link Little Miss Robot -->
<!-- TODO: link copy -->
<!-- TODO: set typo's -->
<Card
	image={{
		src: "/images/profile.jpg",
		alt: "Sébastien Henau",
		border: true,
	}}
>
	<h1 class="font-bold">Sébastien Henau</h1>

	<p class="text-3 text-site-contrast-2">
		Front-end lead at Little Miss Robot
	</p>

	<p class="mt-3">
		I build digital, interactive and accessible products and work on
		improving the technical stack at Little Miss Robot.
	</p>

	<!-- TODO: github & linked in icons -->
	<footer class="mt-7 flex justify-between gap-x-7">
		<ul></ul>

		<Button action={{ href: "/" }}>
			<ButtonText>More about me</ButtonText>
		</Button>
	</footer>
</Card>
