<script lang="ts">
	import { Card, Tag } from "$components";
	import type {
		TCardExperienceCompany,
		TCardExperienceDate,
		TCardExperienceDescription,
		TCardExperienceRole,
	} from "./CardExperience.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let time: TCardExperienceDate;
	export let company: TCardExperienceCompany;
	export let role: TCardExperienceRole;
	export let description: TCardExperienceDescription;
</script>

<Card>
	<Tag>
		{time}
	</Tag>

	<h2 class="text-text-1 font-semibold mt-4">
		{company}
	</h2>

	<p class="text-text-3 mt-2">
		{role}
	</p>

	<p class="text-text-2 mt-2">
		{description}
	</p>
</Card>
