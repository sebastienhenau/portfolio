<script lang="ts">
	import {
		Badge,
		Divider,
		Flow,
		FlowItemProject,
		FlowTitle,
	} from "$components";
</script>

<Flow index="1">
	<div
		class="flex items-center gap-x-5"
		slot="header"
	>
		<Badge theme="accent">22</Badge>

		<FlowTitle>Open source</FlowTitle>
	</div>
</Flow>

<Divider />

<Flow index="2">
	<div
		class="flex items-center gap-x-5"
		slot="header"
	>
		<Badge theme="accent">22</Badge>

		<FlowTitle>Made at Little Miss Robot</FlowTitle>
	</div>

	<ul>
		<li>
			<FlowItemProject
				company="Little Miss Robot"
				date="12 augustus 2023"
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
				role="Front-end developer"
			/>
		</li>

		<li>
			<FlowItemProject
				company="Little Miss Robot"
				date="12 augustus 2023"
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
				role="Front-end developer"
			/>
		</li>

		<li>
			<FlowItemProject
				company="Little Miss Robot"
				date="12 augustus 2023"
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
				role="Front-end developer"
			/>
		</li>

		<li>
			<FlowItemProject
				company="Little Miss Robot"
				date="12 augustus 2023"
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
				role="Front-end developer"
			/>
		</li>

		<li>
			<FlowItemProject
				company="Little Miss Robot"
				date="12 augustus 2023"
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
				role="Front-end developer"
			/>
		</li>

		<li>
			<FlowItemProject
				company="Little Miss Robot"
				date="12 augustus 2023"
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
				role="Front-end developer"
			/>
		</li>
	</ul>
</Flow>
