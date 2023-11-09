<script lang="ts">
	import {
		Button,
		ButtonText,
		ExperienceCard,
		Intro,
		RightSidebar,
		RightSidebarSection,
		StoryCard,
	} from "$components";
</script>

<div
	class="1200:grid 1200:grid-cols-[auto_45%] 1200:items-stretch h-full 1200:gap-6"
>
	<Intro
		class="1200:sticky 1200:top-10 1200:self-start"
		description="I do something and I like to do this, I really hate Angular, but I
			do do do something. For real though, I do something. For real
			though, I do something."
		subtitle="Topic Lead / Front-End Developer at Little Miss Robot"
		tag="article"
		title="Sébastien Henau"
	>
		<Button class="mt-8">
			<ButtonText>More about me</ButtonText>
		</Button>
	</Intro>

	<RightSidebar class="max-1200:mt-10">
		<RightSidebarSection title="About">
			<ul
				class="1200:divide-y 1200:divide-border 700:grid 700:grid-cols-2 1200:grid-cols-1"
			>
				<li>
					<ExperienceCard />
				</li>

				<li>
					<ExperienceCard />
				</li>

				<li>
					<ExperienceCard />
				</li>
			</ul>
		</RightSidebarSection>

		<RightSidebarSection title="Stories">
			<ul
				class="1200:divide-y 1200:divide-border 700:grid 700:grid-cols-2 1200:grid-cols-1"
			>
				<li>
					<StoryCard />
				</li>

				<li>
					<StoryCard />
				</li>

				<li>
					<StoryCard />
				</li>
			</ul>
		</RightSidebarSection>

		<RightSidebarSection title="Projects">
			<ul
				class="1200:divide-y 1200:divide-border 700:grid 700:grid-cols-2 1200:grid-cols-1"
			>
				<li>
					<ExperienceCard />
				</li>

				<li>
					<ExperienceCard />
				</li>

				<li>
					<ExperienceCard />
				</li>
			</ul>
		</RightSidebarSection>
	</RightSidebar>
</div>
