<script lang="ts">
	import {
		AboutEducationItem,
		AboutExperienceItem,
		AboutIntroCard,
		Button,
		ButtonText,
		Divider,
		Flow,
		FlowContent,
		FlowSection,
	} from "$components";
</script>

<AboutIntroCard />

<Divider />

<!-- TODO: tag & structure -->
<Flow>
	<FlowSection index="1">
		<h3
			class="font-bold text-6"
			slot="header"
		>
			Experience
		</h3>

		<FlowContent>
			<p>
				I've been fortunate enough to have had the opportunity to learn
				and work on some challenging projects at Little Miss Robot.
				Ranging from content websites to data driven web applications to
				experimental digital experiences. Each project has been a
				valuable opportunity for growth. This was all made possible
				through great teamwork with great people!
			</p>

			<ul class="mt-6 space-y-6">
				<li>
					<AboutExperienceItem />
				</li>

				<li>
					<AboutExperienceItem />
				</li>
			</ul>
		</FlowContent>

		<!-- TODO: spacing -->
		<Divider slot="footer" />
	</FlowSection>

	<FlowSection index="2">
		<h3
			class="font-bold text-6"
			slot="header"
		>
			Projects
		</h3>

		<FlowContent class="flex flex-col gap-y-4">
			<p>
				Mijn leergierigheid, gedrevenheid en oog voor detail komt tot
				uiting in mijn projecten, van contentwebsites tot data-driven
				web-applicaties en experimentele digitale ervaringen. Een deel
				van de projecten staan opgesomd op mijn website.
			</p>

			<Button
				action={{
					href: "/projects",
				}}
				class="self-end"
			>
				<ButtonText>Go to projects</ButtonText>
			</Button>
		</FlowContent>

		<!-- TODO: spacing -->
		<Divider slot="footer" />
	</FlowSection>

	<FlowSection index="3">
		<h3
			class="font-bold text-6"
			slot="header"
		>
			Education
		</h3>

		<FlowContent>
			<p>
				During my education I landed 2 bachelor degrees. Both degrees
				complemented each other where I was able to explore UX, visual
				design, motion design, back-end and front-end development.
			</p>

			<ul class="mt-6 space-y-6">
				<li>
					<AboutEducationItem />
				</li>

				<li>
					<AboutEducationItem />
				</li>
			</ul>
		</FlowContent>
	</FlowSection>
</Flow>
