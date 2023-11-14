<script lang="ts">
	import type { TCard, TCardMetadata } from "$components";
	import { Card, CardMetadata } from "$components";
	import type {
		TCardEducationName,
		TCardEducationSchool,
	} from "./CardEducation.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let card: TCard = {};
	export let cardMetaData: TCardMetadata;
	export let name: TCardEducationName;
	export let school: TCardEducationSchool;
</script>

<!-- TODO: refine card meta data -->
<Card {...card}>
	<CardMetadata {...cardMetaData} />

	<h2 class="text-text-1 font-semibold mt-4">
		{name}
	</h2>

	<p class="text-text-2 mt-2">
		{school}
	</p>
</Card>
