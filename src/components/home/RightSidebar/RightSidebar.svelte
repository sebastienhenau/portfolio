<script>
	import clsx from "clsx";
</script>

<aside class={clsx("border-l border-r border-border relative", $$props.class)}>
	<ul>
		<slot />
	</ul>
</aside>
