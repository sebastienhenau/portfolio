<script lang="ts">
	import { FlowSubtitle, Tag } from "$components";
	import type { TAboutEducationItemEducation } from "./AboutEducationItem.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let education: TAboutEducationItemEducation;

	// -------------------------------------------------------------------------
	// Variables
	// -------------------------------------------------------------------------
	const { name, school, type, time } = education;
</script>

<article>
	<header class="flex justify-between gap-x-6 items-start">
		<div class="flex-1">
			<!-- TODO: datetime -->
			<time
				class="text-site-contrast-2 text-3 leading-none block"
				datetime=""
			>
				{time}
			</time>

			<FlowSubtitle>{name}</FlowSubtitle>
		</div>

		<Tag>{type}</Tag>
	</header>

	<p class="mt-1">{school}</p>
</article>
