<script lang="ts">
	import clsx from "clsx";
	import { Action, Image } from "$components";
	import { ROUTES_HOME } from "$constants";
</script>

<Action
	class={clsx("inline-block", $$props.class)}
	href={ROUTES_HOME}
>
	<Image
		alt="Sébastien Henau"
		src="/images/logo.svg"
	/>
</Action>
