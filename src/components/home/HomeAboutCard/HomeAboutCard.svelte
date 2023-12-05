<script>
	import {
		ActionIcon,
		Button,
		ButtonIcon,
		ButtonText,
		Card,
	} from "$components";
	import { ROUTES_ABOUT } from "$constants";
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
		<ul class="flex items-center gap-3">
			<li>
				<!-- TODO: class: "w-6", -->
				<ActionIcon
					action={{
						href: "https://github.com/sebastienhenau",
						target: "_blank",
					}}
					icon={{
						name: "Github",
					}}
				/>
			</li>

			<li>
				<!-- TODO: class: "w-6", -->
				<ActionIcon
					action={{
						href: "https://linkedin.com/in/sébastien-henau",
						target: "_blank",
					}}
					icon={{
						name: "Linkedin",
					}}
				/>
			</li>
		</ul>

		<Button action={{ href: ROUTES_ABOUT }}>
			<ButtonText>More about me</ButtonText>

			<ButtonIcon
				class="w-6"
				icon={{ name: "ChevronRight" }}
			/>
		</Button>
	</footer>
</Card>
