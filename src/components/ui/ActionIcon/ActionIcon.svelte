<script lang="ts">
	import clsx from "clsx";
	import { Action, Icon } from "$components";
	import type {
		TActionIconAction,
		TActionIconIcon,
	} from "./ActionIcon.types";

	// -------------------------------------------------------------------------
	// Props
	// -------------------------------------------------------------------------
	export let action: TActionIconAction;
	export let icon: TActionIconIcon;
</script>

<Action
	{...action}
	class={clsx("hover:text-accent transition-colors", $$props.class)}
>
	<Icon {...icon} />
</Action>
