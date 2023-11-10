<script>
	import {
		Button,
		ButtonText,
		ExperienceCard,
		Intro,
		Section,
		StoryCard,
	} from "$components";
</script>

<div
	class="1200:grid 1200:grid-rows-1 1200:grid-cols-[1fr_45%_6.25rem] 1200:items-stretch 1200:h-full"
>
	<div class="1200:pt-10">
		<Intro
			class="1200:sticky 1200:top-10"
			description="I do something and I like to do this, I really hate Angular, but I
			do do do something. For real though, I do something. For real
			though, I do something."
			subtitle="Topic Lead / Front-End Developer at Little Miss Robot"
			tag="article"
			title="Sébastien Henau"
		>
			<Button class="mt-6 1200:mt-8">
				<ButtonText>More about me</ButtonText>
			</Button>
		</Intro>
	</div>

	<aside class="max-1200:mt-10">
		<ul>
			<li class="mt-[-1px]">
				<Section
					title="About"
					topDivider={false}
				>
					<ul
						class="border-l border-r border-border grid 700:grid-cols-2 1200:grid-cols-1"
					>
						<li
							class="border-b border-border 700:border-r 1200:border-r-0"
						>
							<ExperienceCard />
						</li>

						<li class="border-b border-border">
							<ExperienceCard />
						</li>

						<li class="border-border 700:border-r 1200:border-r-0">
							<ExperienceCard />
						</li>

						<li class="bg-gradient-striped 1200:hidden" />
					</ul>
				</Section>
			</li>

			<li class="mt-[-1px]">
				<Section title="Stories">
					<ul
						class="border-l border-r border-border grid 700:grid-cols-2 1200:grid-cols-1"
					>
						<li
							class="border-b border-border 700:border-r 1200:border-r-0"
						>
							<StoryCard />
						</li>

						<li class="border-b border-border">
							<StoryCard />
						</li>

						<li class="border-border 700:border-r 1200:border-r-0">
							<StoryCard />
						</li>

						<li class="bg-gradient-striped 1200:hidden" />
					</ul>
				</Section>
			</li>

			<li>
				<Section title="Stories">
					<ul
						class="border-l border-r border-border grid 700:grid-cols-2 1200:grid-cols-1"
					>
						<li
							class="border-b border-border 700:border-r 1200:border-r-0"
						>
							<StoryCard />
						</li>

						<li class="border-b border-border">
							<StoryCard />
						</li>

						<li class="border-border 700:border-r 1200:border-r-0">
							<StoryCard />
						</li>

						<li class="bg-gradient-striped 1200:hidden" />
					</ul>
				</Section>
			</li>
		</ul>
	</aside>
</div>
