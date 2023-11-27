<script>
	import { FlowItem, Link, ListTags } from "$components";
</script>

<FlowItem
	item={{
		image: {
			border: true,
			src: "/images/placeholder.jpg",
			alt: "",
		},
	}}
	title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
>
	<time
		class="text-site-contrast-2 text-3 block"
		datetime=""
	>
		12 augustus 2023
	</time>

	<p class="mt-4">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ligula
		vel ligula imperdiet tempor. Vivamus nec nibh lacinia, pulvinar magna
		sit amet, ultrices ante. Lorem ipsum dolor sit amet, consectetur
		adipiscing elit.
	</p>

	<footer class="mt-7 flex justify-between gap-x-7">
		<ListTags items={["React", "Next.js", "Vue"]} />

		<Link
			action={{
				href: "/",
			}}
		>
			Read more
		</Link>
	</footer>
</FlowItem>
