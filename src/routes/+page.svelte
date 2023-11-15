<script lang="ts">
	import {
		Block,
		Button,
		ButtonText,
		CardEducation,
		CardExperience,
		Circle,
		HomeProjectsItem,
		HomeSection,
		Tag,
	} from "$components";
	import { educations, experiences, projects } from "$content";

	// -------------------------------------------------------------------------
	// Variables
	// -------------------------------------------------------------------------
	const topProjects = projects.slice(0, 3);
	const currentExperience = experiences[0];
	const lastEducation = educations[0];
</script>

<!-- TODO: replace 64px -->
<div
	class="1200:grid 1200:grid-cols-[1fr_auto_45%_6.25rem] 1200:grid-rows-[64px_calc(100vh-64px)_auto] 1200:items-stretch 1200:h-full"
>
	<Block
		class="1200:sticky 1200:top-10 1200:self-start 1200:col-start-1 1200:col-end-3 1200:row-start-2 1200:row-end-4"
		description="I build digital, interactive and accessible products and work on improving the technical stack at Little Miss Robot."
		subtitle="Front-end lead at Little Miss Robot"
		tag="article"
		title="Sébastien Henau"
	>
		<Button
			action={{ href: "/about" }}
			class="mt-6 1200:mt-8"
		>
			<ButtonText>More about me</ButtonText>
		</Button>
	</Block>

	<Circle
		class="max-1200:hidden 1200:sticky 1200:top-10 1200:col-start-2 1200:col-end-3 1200:row-start-2 1200:row-end-3 w-[100px]"
		type="bl"
	/>

	<!--	<HighlightWord class="max-1200:hidden 1200:sticky 1200:top-10 1200:col-start-1 1200:col-end-3 1200:row-start-2 1200:row-end-3 1200:flex 1200:items-end 1200:justify-end" />-->

	<aside
		class="max-1200:mt-10 1200:col-start-3 1200:col-end-4 1200:row-start-1 1200:row-end-4 1200:z-50"
	>
		<ul>
			<li class="mt-[-1px]">
				<HomeSection
					title="About"
					topDivider={false}
				>
					<ul
						class="border-l border-r border-border grid 700:grid-cols-2 1200:grid-cols-1"
					>
						<li
							class="border-b border-border 700:border-r 1200:border-r-0"
						>
							<CardExperience
								compact={true}
								company={currentExperience.company}
								description={currentExperience.description}
								role={currentExperience.role}
								time={currentExperience.time}
							/>
						</li>

						<li class="border-border 700:border-r 1200:border-r-0">
							<CardEducation
								cardMetaData={{
									date: lastEducation.time,
									type: lastEducation.type,
								}}
								name={lastEducation.name}
								school={lastEducation.school}
							/>
						</li>
					</ul>
				</HomeSection>
			</li>

			<li class="mt-[-1px]">
				<HomeSection title="Stories">
					<ul
						class="border-l border-r border-border grid 700:grid-cols-2 1200:grid-cols-1"
					>
						<li
							class="border-b border-border 700:border-r 1200:border-r-0 bg-gradient-striped flex justify-center items-center h-14"
						>
							<Tag>Coming soon</Tag>
						</li>

						<li
							class="border-b border-border bg-gradient-striped flex justify-center items-center h-14"
						>
							<Tag>Coming soon</Tag>
						</li>

						<li
							class="border-border 700:border-r 1200:border-r-0 bg-gradient-striped flex justify-center items-center h-14"
						>
							<Tag>Coming soon</Tag>
						</li>

						<li class="bg-gradient-striped 1200:hidden" />
					</ul>
				</HomeSection>
			</li>

			<li>
				<HomeSection title="Projects">
					<ul
						class="border-l border-r border-border grid 700:grid-cols-2 1200:grid-cols-1"
					>
						{#each topProjects as topProject, index}
							<HomeProjectsItem
								{...topProject}
								{index}
								total={topProjects.length - 1}
							/>
						{/each}

						<li class="bg-gradient-striped 1200:hidden" />
					</ul>
				</HomeSection>
			</li>
		</ul>
	</aside>

	<!--<div
		class="max-1200:hidden 1200:col-start-4 1200:col-end-5 1200:row-start-2 1200:row-end-3 1200:self-center 1200:sticky 1200:top-10 1200:self-stretch 1200:flex 1200:items-center 1200:justify-end"
	>
		<HomeScrollProgress />
	</div>-->
</div>
