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

<div class="grid grid-cols-[auto_37rem] items-stretch h-full gap-6">
	<Intro
		class="sticky top-10 self-start"
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

	<RightSidebar>
		<RightSidebarSection title="About">
			<ul class="divide-y divide-border">
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
			<ul class="divide-y divide-border">
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
			<ul class="divide-y divide-border">
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
