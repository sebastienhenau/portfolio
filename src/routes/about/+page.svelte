<script lang="ts">
	import {
		AboutBlock,
		AboutBurstBlock,
		AboutSkill,
		CardEducation,
		CardExperience,
		Tag,
	} from "$components";
</script>

<article>
	<AboutBlock class="pt-12 pb-8">
		<h1 class="text-text-1 text-7 font-semibold">Hello 👋</h1>

		<p class="text-text-3 text-3 mt-1">A little about me ...</p>

		<p class="text-text-2 mt-4">
			I do something and I like to do this, I really hate Angular, but I
			do do do something. For real though, I do something. For real
			though, I do something. I do something and I like to do this, I
			really hate Angular, but I do do do something. For real though, I do
			something. For real though, I do something.
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

	<section>
		<AboutBlock class="pt-14 pb-8">
			<h2 class="text-text-1 text-7 font-semibold">Experience</h2>

			<p class="text-text-2 mt-4">
				I do something and I like to do this, I really hate Angular, but
				I do do do something. For real though, I do something. For real
				though, I do something. I do something and I like to do this, I
				really hate Angular, but I do do do something. For real though,
				I do something. For real though, I do something.
			</p>
		</AboutBlock>

		<AboutBurstBlock>
			<CardExperience />
		</AboutBurstBlock>

		<AboutBlock>
			<ul class="border-l border-r border-b border-border">
				<li class="border-b border-border">
					<CardExperience />
				</li>

				<li>
					<CardExperience />
				</li>
			</ul>
		</AboutBlock>
	</section>

	<section>
		<AboutBlock class="pt-14">
			<h2 class="text-text-1 text-7 font-semibold">Skillset</h2>

			<p class="text-text-2 mt-4">
				I do something and I like to do this, I really hate Angular, but
				I do do do something. For real though, I do something. For real
				though, I do something. I do something and I like to do this, I
				really hate Angular, but I do do do something. For real though,
				I do something. For real though, I do something.
			</p>

			<!-- TODO: fix collapsing borders -->
			<ul class="mt-8 flex flex-wrap justify-center">
				<li class="w-3/12">
					<AboutSkill>JavaScript</AboutSkill>
				</li>

				<li class="w-3/12">
					<AboutSkill>JavaScript</AboutSkill>
				</li>

				<li class="w-3/12">
					<AboutSkill>JavaScript</AboutSkill>
				</li>

				<li class="w-3/12">
					<AboutSkill>JavaScript</AboutSkill>
				</li>

				<li class="w-3/12">
					<AboutSkill>JavaScript</AboutSkill>
				</li>

				<li class="w-3/12">
					<AboutSkill>JavaScript</AboutSkill>
				</li>

				<li class="w-3/12">
					<AboutSkill>JavaScript</AboutSkill>
				</li>
			</ul>

			<p class="text-text-2 mt-8">
				I do something and I like to do this, I really hate Angular, but
				I do do do something. For real though, I do something. For real
				though, I do something. I do something and I like to do this, I
				really hate Angular, but I do do do something. For real though,
				I do something. For real though, I do something.
			</p>

			<ul class="flex flex-wrap gap-3 max-w-[75%] mt-8">
				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>

				<li>
					<Tag>React</Tag>
				</li>
			</ul>
		</AboutBlock>
	</section>

	<!-- TODO: about block set tag -->
	<section>
		<AboutBlock class="pt-14 pb-14">
			<h2 class="text-text-1 text-7 font-semibold">Education</h2>

			<p class="text-text-2 mt-4">
				I do something and I like to do this, I really hate Angular, but
				I do do do something. For real though, I do something. For real
				though, I do something. I do something and I like to do this, I
				really hate Angular, but I do do do something. For real though,
				I do something. For real though, I do something.
			</p>

			<ul class="mt-8">
				<li class="border border-border">
					<CardEducation />
				</li>

				<li class="border-l border-r border-b border-border">
					<CardEducation />
				</li>
			</ul>
		</AboutBlock>
	</section>
</article>
