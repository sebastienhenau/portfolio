<script>
	import clsx from "clsx";
	import { Line } from "$components";
</script>

<div class={clsx("flex items-stretch", $$props.class)}>
	<ul class="self-center">
		<li>item 1</li>

		<li>
			<Line type="right" />
		</li>

		<li>item 2</li>

		<li>
			<Line type="right" />
		</li>

		<li>item 3</li>
	</ul>

	<div class="bg-border w-[1px]">
		<div
			class="bg-gradient-to-b from-accent to-transparent h-full w-full"
		/>
	</div>
</div>
