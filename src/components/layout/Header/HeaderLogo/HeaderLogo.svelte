<script lang="ts">
	import clsx from "clsx";
	import { Action, Image } from "$components";
</script>

<Action
	class={clsx("inline-block p-4", $$props.class)}
	href="/"
>
	<Image
		alt="Sébastien Henau"
		src="/images/logo.svg"
	/>
</Action>
