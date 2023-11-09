<script lang="ts">
	import {
		Action,
		ActionWrapper,
		Card,
		CardMetadata,
		Tag,
	} from "$components";
</script>

<ActionWrapper let:elevate>
	<Card>
		<CardMetadata
			date="12/08/2023"
			number="01"
			type="Story"
		/>

		<h2 class="text-text-1 font-semibold mt-4">
			<Action class="text-left">Hylas</Action>
		</h2>

		<p class={`text-text-2 mt-2 ${elevate}`}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
			ligula vel ligula imperdiet tempor. Vivamus nec nibh lacinia,
			pulvinar magna sit amet, ultrices ante.
		</p>

		<ul class={`flex flex-wrap gap-3 mt-6 ${elevate}`}>
			<li>
				<Tag theme="text-3">Next</Tag>
			</li>

			<li>
				<Tag theme="text-3">Nuxt</Tag>
			</li>

			<li>
				<Tag theme="text-3">Sveltekit</Tag>
			</li>

			<li>
				<Tag theme="text-3">SolidStart</Tag>
			</li>
		</ul>
	</Card>
</ActionWrapper>
