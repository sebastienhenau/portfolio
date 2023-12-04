<script lang="ts">
	import clsx from "clsx";
	import { Icon } from "$components";
	import type { TLinkIconIcon } from "./LinkIcon.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let icon: TLinkIconIcon;
</script>

<Icon
	{...icon}
	class={clsx("text-inherit", $$props.class)}
/>
