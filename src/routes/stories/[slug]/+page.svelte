<script lang="ts">
	import {
		Divider,
		Flow,
		FlowContent,
		FlowSubtitle,
		Image,
		StoryHeader,
		StoryIntro,
		StoryOutro,
	} from "$components";
</script>

<article>
	<StoryHeader
		date="12 augustus 2023"
		listTags={{
			items: ["React", "Vue", "Next.js"],
		}}
		title="Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet,
		consectetur."
	/>

	<StoryIntro>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ligula
		vel ligula imperdiet tempor. Vivamus nec nibh lacinia, pulvinar magna
		sit amet, ultrices ante. Lorem ipsum dolor sit amet, consectetur
		adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
		elit. In eget ligula vel ligula imperdiet tempor. Vivamus nec nibh
		lacinia, pulvinar magna sit amet, ultrices ante. Lorem ipsum dolor sit
		amet, consectetur adipiscing elit.
	</StoryIntro>

	<Divider />

	<Flow>
		<FlowContent>
			<FlowSubtitle>Lorem ipsum dolor sit amet.</FlowSubtitle>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
				ligula vel ligula imperdiet tempor. Vivamus nec nibh lacinia,
				pulvinar magna sit amet, ultrices ante. Lorem ipsum dolor sit
				amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. In eget ligula vel ligula imperdiet
				tempor. Vivamus nec nibh lacinia, pulvinar magna sit amet,
				ultrices ante. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit.
			</p>

			<Image
				alt=""
				border
				class="w-full mt-6 h-[250px]"
				src="/images/placeholder.jpg"
			/>

			<FlowSubtitle class="mt-6">
				Lorem ipsum dolor sit amet.
			</FlowSubtitle>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
				ligula vel ligula imperdiet tempor. Vivamus nec nibh lacinia,
				pulvinar magna sit amet, ultrices ante. Lorem ipsum dolor sit
				amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. In eget ligula vel ligula imperdiet
				tempor. Vivamus nec nibh lacinia, pulvinar magna sit amet,
				ultrices ante. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit.
			</p>

			<FlowSubtitle class="mt-6">
				Lorem ipsum dolor sit amet.
			</FlowSubtitle>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
				ligula vel ligula imperdiet tempor. Vivamus nec nibh lacinia,
				pulvinar magna sit amet, ultrices ante. Lorem ipsum dolor sit
				amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. In eget ligula vel ligula imperdiet
				tempor. Vivamus nec nibh lacinia, pulvinar magna sit amet,
				ultrices ante. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit.
			</p>
		</FlowContent>
	</Flow>

	<Divider />

	<StoryOutro>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget ligula
		vel ligula imperdiet tempor. Vivamus nec nibh lacinia, pulvinar magna
		sit amet, ultrices ante. Lorem ipsum dolor sit amet, consectetur
		adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
		elit. In eget ligula vel ligula imperdiet tempor. Vivamus nec nibh
		lacinia, pulvinar magna sit amet, ultrices ante. Lorem ipsum dolor sit
		amet, consectetur adipiscing elit.
	</StoryOutro>
</article>
