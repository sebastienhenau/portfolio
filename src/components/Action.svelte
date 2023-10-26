<script>
	export let href = "";
	export let type = "button";
	export let target = null;

	const getRel = () => {
		switch (target) {
			case "_blank":
				return "noopener noreferer";
			default:
				return "";
		}
	};
</script>

{#if !!href}
	<a
		class={$$props.class}
		{href}
		{target}
		rel={getRel()}
	>
		<slot />
	</a>
{:else}
	<button
		class={$$props.class}
		{type}
		on:click
	>
		<slot />
	</button>
{/if}
