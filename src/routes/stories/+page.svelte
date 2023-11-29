<script lang="ts">
	import { Badge, Flow, FlowItemStory, FlowTitle } from "$components";
</script>

<Flow>
	<div
		class="flex items-center gap-x-5"
		slot="header"
	>
		<Badge theme="accent">22</Badge>

		<FlowTitle>Stories</FlowTitle>
	</div>

	<ul>
		<li>
			<FlowItemStory
				date="12 augustus 2023"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ligula vel ligula imperdiet tempor. Vivamus nec nibh lacinia, pulvinar magna sit amet, ultrices ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				flowItem={{
					title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
					item: {
						image: {
							border: true,
							src: "/images/placeholder.jpg",
							alt: "",
						},
					},
				}}
				link={{
					action: {
						href: "/",
					},
				}}
				listTags={{
					items: ["React", "Next.js", "Vue"],
				}}
			/>
		</li>

		<li>
			<FlowItemStory
				date="12 augustus 2023"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ligula vel ligula imperdiet tempor. Vivamus nec nibh lacinia, pulvinar magna sit amet, ultrices ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				flowItem={{
					title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
					item: {
						image: {
							border: true,
							src: "/images/placeholder.jpg",
							alt: "",
						},
					},
				}}
				link={{
					action: {
						href: "/",
					},
				}}
				listTags={{
					items: ["React", "Next.js", "Vue"],
				}}
			/>
		</li>

		<li>
			<FlowItemStory
				date="12 augustus 2023"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ligula vel ligula imperdiet tempor. Vivamus nec nibh lacinia, pulvinar magna sit amet, ultrices ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				flowItem={{
					title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
					item: {
						image: {
							border: true,
							src: "/images/placeholder.jpg",
							alt: "",
						},
					},
				}}
				link={{
					action: {
						href: "/",
					},
				}}
				listTags={{
					items: ["React", "Next.js", "Vue"],
				}}
			/>
		</li>

		<li>
			<FlowItemStory
				date="12 augustus 2023"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ligula vel ligula imperdiet tempor. Vivamus nec nibh lacinia, pulvinar magna sit amet, ultrices ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				flowItem={{
					title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
					item: {
						image: {
							border: true,
							src: "/images/placeholder.jpg",
							alt: "",
						},
					},
				}}
				link={{
					action: {
						href: "/",
					},
				}}
				listTags={{
					items: ["React", "Next.js", "Vue"],
				}}
			/>
		</li>

		<li>
			<FlowItemStory
				date="12 augustus 2023"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ligula vel ligula imperdiet tempor. Vivamus nec nibh lacinia, pulvinar magna sit amet, ultrices ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				flowItem={{
					title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
					item: {
						image: {
							border: true,
							src: "/images/placeholder.jpg",
							alt: "",
						},
					},
				}}
				link={{
					action: {
						href: "/",
					},
				}}
				listTags={{
					items: ["React", "Next.js", "Vue"],
				}}
			/>
		</li>

		<li>
			<FlowItemStory
				date="12 augustus 2023"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ligula vel ligula imperdiet tempor. Vivamus nec nibh lacinia, pulvinar magna sit amet, ultrices ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
				flowItem={{
					title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
					item: {
						image: {
							border: true,
							src: "/images/placeholder.jpg",
							alt: "",
						},
					},
				}}
				link={{
					action: {
						href: "/",
					},
				}}
				listTags={{
					items: ["React", "Next.js", "Vue"],
				}}
			/>
		</li>
	</ul>
</Flow>
