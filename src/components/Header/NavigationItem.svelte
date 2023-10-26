<script>
	import Action from "$components/Action.svelte";

	export let action = {};

	// class:active="{$page.path.includes(action.href)}"
</script>

<Action {...action}>
	<slot />
</Action>
