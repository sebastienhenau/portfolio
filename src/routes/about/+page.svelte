<script lang="ts">
	import clsx from "clsx";
	import {
		AboutBlock,
		AboutBurstBlock,
		CardEducation,
		CardExperience,
	} from "$components";
	import { educations, experiences } from "$content";
</script>

<svelte:head>
	<title>About | Sébastien Henau</title>

	<meta
		content="Welcome to Sébastien Henau's personal site. I'm a 30-year-old Belgian front-end developer toggling my way into front-end architectures with my faithful cup of coffee next to me."
		name="description"
	/>
</svelte:head>

<article>
	<AboutBlock class="pt-12 pb-8">
		<h1 class="text-text-1 text-7 font-semibold">Hello there 👋</h1>

		<p class="text-text-2 mt-4">
			I'm a 30-year-old Belgian developer toggling my way into front-end
			architectures with my faithful cup of coffee next to me. Located in
			the heart of Belgium, I wear the hat as one of the lead developers
			at Little Miss Robot. Together with a great team, I am fortunate
			enough to contribute to making the internet a better place!
		</p>

		<p class="text-text-2 mt-4">
			When I am not losing myself in lines of code you'll likely catch me
			navigating running trails, attempting to conquer climbing walls (or
			just gracefully descend from them), playing some games on my trusty
			PlayStation or if I have some time left, read a book.
		</p>
	</AboutBlock>

	<!-- TODO: replace by actual image/short video -->
	<AboutBurstBlock extend>
		<ul class="grid grid-cols-3">
			<li
				class="bg-gradient-striped"
				style="height:500px;"
			></li>

			<li
				class="border-l border-r border-border bg-gradient-striped"
				style="height:500px;"
			></li>

			<li
				class="bg-gradient-striped"
				style="height:500px;"
			></li>
		</ul>
	</AboutBurstBlock>

	<!-- TODO: about block set tag -->
	<AboutBlock class="pt-14 pb-8">
		<section>
			<h2 class="text-text-1 text-7 font-semibold">Experience</h2>

			<p class="text-text-2 mt-4">
				I've been fortunate enough to have had the opportunity to learn
				and work on some challenging projects at Little Miss Robot.
				Ranging from content websites to data driven web applications to
				experimental digital experiences. Each project has been a
				valuable opportunity for growth. This was all made possible
				through great teamwork with great people!
			</p>

			<ul class="space-y-8 mt-8">
				{#each experiences as { company, role, time, description }, index}
					<li
						class={clsx({
							"border-border border-b pb-8":
								index !== experiences.length - 1,
						})}
					>
						<CardExperience
							card={{ inset: false }}
							{company}
							{description}
							{role}
							{time}
						/>
					</li>
				{/each}
			</ul>
		</section>

		<!-- TODO: about block set tag -->
		<section class="pt-14 pb-14">
			<h2 class="text-text-1 text-7 font-semibold">Education</h2>

			<p class="text-text-2 mt-4">
				During my education I landed 2 bachelor degrees. Both degrees
				complemented each other where I was able to explore UX, visual
				design, motion design, back-end and front-end development.
			</p>

			<ul class="mt-8 space-y-8">
				{#each educations as { time, type, name, school }, index}
					<li
						class={clsx({
							"border-b border-border pb-8":
								index !== educations.length - 1,
						})}
					>
						<CardEducation
							card={{ inset: false }}
							cardMetaData={{
								date: time,
								type,
							}}
							{name}
							{school}
						/>
					</li>
				{/each}
			</ul>
		</section>
	</AboutBlock>
</article>
