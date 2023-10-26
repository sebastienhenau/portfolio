<script>
	import { Action, Corner } from "$components";
</script>

<Action class={`relative py-3 px-4 group ${$$props.class}`}>
	<span class="absolute inset-0 w-full h-full border border-accent/20" />

	<span
		class="absolute inset-0 w-full h-full bg-gradient-to-l from-accent to-transparent opacity-20 group-hover:opacity-40 transition-opacity"
	/>

	<Corner type="tl" />

	<Corner type="tr" />

	<Corner type="br" />

	<Corner type="bl" />

	<slot />
</Action>
