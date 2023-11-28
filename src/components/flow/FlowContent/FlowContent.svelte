<script lang="ts">
	import clsx from "clsx";
</script>

<!-- TODO: equalize FlowContent & FlowItem -->
<div class={clsx("flow-content-pl", $$props.class)}>
	<slot />
</div>
