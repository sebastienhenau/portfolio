<script lang="ts">
	import {
		AboutBlock,
		AboutBurstBlock,
		CardEducation,
		CardExperience,
	} from "$components";
</script>

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
			Playstation or if I have some time left, read a book.
		</p>
	</AboutBlock>

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
				<li class="border-border border-b pb-8">
					<CardExperience
						card={{ inset: false }}
						company="Little Miss Robot"
						description="As I saw the company grow, after 5 years, I was given the opportunity to grow into more of a lead role. My responsibilities shifted more and I had to combine managing, guiding and maintaining a development team, while still building digital products."
						role="Front end lead"
						time="2022 - 2023"
					/>
				</li>

				<li class="border-border border-b pb-8">
					<CardExperience
						card={{ inset: false }}
						company="Little Miss Robot"
						description="After an internship I got offered a job at Little Miss Robot. I worked on various projects ranging from content sites to data driven web applications to experimental digital experiences. I was given the opportunity to work and experiment with different languages, libraries and frameworks with a focus on the front-end."
						role="Front end developer"
						time="2017 - 2022"
					/>
				</li>

				<li class="border-border border-b pb-8">
					<CardExperience
						card={{ inset: false }}
						company="Little Miss Robot"
						description="In the course of my studies I landed a three-month internship at Little Miss Robot. This opportunity shifted my focus, leading me more into the role of a front-end developer."
						role="Intern front end developer"
						time="2017"
					/>
				</li>

				<li class="border-border border-b pb-8">
					<CardExperience
						card={{ inset: false }}
						company="Endare"
						description="During my studies I was able to secure a student job for a little over a month at Endare, where my focus was mainly on translating the visual layer to an interactive experience in a browser."
						role="Student job"
						time="2017"
					/>
				</li>

				<li>
					<CardExperience
						card={{ inset: false }}
						company="Open Summer of Code (2015)"
						description="Back in 2015, I participated in one of the projects offered in the 2015 version of Open Summer of Code. Over the span of 3 weeks, I got introduced to a new topic: open data."
						role="Student job"
						time="2015"
					/>
				</li>
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
				<li class="border-b border-border pb-8">
					<CardEducation
						card={{ inset: false }}
						cardMetaData={{
							date: "2014 - 2017",
							type: "bachelor",
						}}
						name="Digital Design & Development (Devine)"
						school="Howest University college West-Flanders"
					/>
				</li>

				<li>
					<CardEducation
						card={{ inset: false }}
						cardMetaData={{
							date: "2011 - 2014",
							type: "bachelor",
						}}
						name="Graphic Design and Digital Media"
						school="Artevelde University College"
					/>
				</li>
			</ul>
		</section>
	</AboutBlock>
</article>
