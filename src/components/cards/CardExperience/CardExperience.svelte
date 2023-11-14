<script lang="ts">
	import clsx from "clsx";
	import type { TCard } from "$components";
	import { Card, Tag } from "$components";
	import type {
		TCardExperienceCompact,
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
	export let compact: TCardExperienceCompact = false;
	export let card: TCard = {};
</script>

<Card {...card}>
	<Tag>
		{time}
	</Tag>

	<h2 class="text-text-1 font-semibold mt-4">
		{company}
	</h2>

	<p class="text-text-3 mt-2">
		{role}
	</p>

	<p
		class={clsx("text-text-2 mt-2", {
			"line-clamp-3": compact,
		})}
	>
		{description}
	</p>
</Card>
