<script lang="ts">
	import type { TAction, TCardMetadata } from "$components";
	import {
		Action,
		ActionWrapper,
		Card,
		CardMetadata,
		Tag,
	} from "$components";
	import type {
		TCardProjectCompany,
		TCardProjectName,
		TCardProjectTechnologies,
	} from "./CardProject.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let action: TAction = {};
	export let cardMetadata: TCardMetadata;
	export let name: TCardProjectName;
	export let company: TCardProjectCompany;
	export let technologies: TCardProjectTechnologies;
</script>

<ActionWrapper let:elevate>
	<Card>
		<CardMetadata {...cardMetadata} />

		<h2 class="text-text-1 font-semibold mt-4">
			<Action
				{...action}
				class="text-left"
				target="_blank"
			>
				{name}
			</Action>
		</h2>

		<p class={`text-text-2 mt-2 ${elevate}`}>Made at {company}</p>

		<ul class={`flex flex-wrap gap-3 mt-6 ${elevate}`}>
			{#each technologies as technology}
				<li>
					<Tag theme="text-3">
						{technology}
					</Tag>
				</li>
			{/each}
		</ul>
	</Card>
</ActionWrapper>
