<script lang="ts">
	import { FlowItem, Link, ListTags } from "$components";
	import type {
		TFlowItemProjectCompany,
		TFlowItemProjectDate,
		TFlowItemProjectFlowItem,
		TFlowItemProjectLink,
		TFlowItemProjectListTags,
		TFlowItemProjectRole,
	} from "./FlowItemProject.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let flowItem: TFlowItemProjectFlowItem;
	export let date: TFlowItemProjectDate;
	export let company: TFlowItemProjectCompany;
	export let role: TFlowItemProjectRole;
	export let listTags: TFlowItemProjectListTags;
	export let link: TFlowItemProjectLink;
</script>

<FlowItem {...flowItem}>
	<ul class="space-y-2 mt-2">
		<li class="text-site-contrast-2">
			<time
				class="text-inherit block"
				datetime=""
			>
				{date}
			</time>
		</li>

		<li class="text-site-contrast-2">
			Made at {company}
		</li>

		<li class="text-site-contrast-2">
			{role}
		</li>
	</ul>

	<footer class="mt-7 flex justify-between gap-x-7">
		<ListTags {...listTags} />

		<Link {...link}>Check it out</Link>
	</footer>
</FlowItem>
