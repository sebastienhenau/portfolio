<script>
	import { Block, Circle } from "$components";
</script>

<svelte:head>
	<title>Projects | Sébastien Henau</title>

	<meta
		content="Welcome to Sébastien Henau's personal site. I'm a 30-year-old Belgian front-end developer toggling my way into front-end architectures with my faithful cup of coffee next to me."
		name="description"
	/>
</svelte:head>

<div class="700:grid 700:grid-cols-[1fr_auto_50px] 700:grid-rows-[auto_1fr]">
	<!-- TODO: px to rem -->
	<Circle
		class="700:sticky 700:top-10 max-700:hidden 700:col-start-2 700:col-end-3 700:row-start-1 700:row-end-2 w-[120px]"
		type="bottom"
	/>

	<!-- TODO: max-w-[960px] mx-auto -->
	<Block
		class="col-start-1 col-end-4 row-start-1 row-end-3"
		description=""
		title="Projects"
	>
		<ul
			class="mt-10 grid grid-cols-1 700:grid-cols-[minmax(30px,1fr)_min(640px,100%-60px)_minmax(30px,1fr)]"
		>
			<!--{#each projects as project, index}
				<ProjectsItem
					{index}
					total={projects.length - 1}
					{...project}
				/>
			{/each}-->
		</ul>
	</Block>
</div>
