<script>
	import { Block, CardProject, Circle, Line } from "$components";
</script>

<div class="700:grid 700:grid-cols-[1fr_auto_50px] 700:grid-rows-[auto_1fr]">
	<!-- TODO: px to rem -->
	<Circle
		class="700:sticky 700:top-10 max-700:hidden 700:col-start-2 700:col-end-3 700:row-start-1 700:row-end-2 w-[120px]"
		type="bottom"
	/>

	<Block
		class="col-start-1 col-end-4 row-start-1 row-end-3"
		description="I do something and I like to do this, I really hate Angular, but I do do do something. For real though, I do something. For real though, I do something."
		title="Projects"
	>
		<ul
			class="mt-10 grid grid-cols-1 700:grid-cols-[minmax(30px,1fr)_min(640px,100%-60px)_minmax(30px,1fr)]"
		>
			<li
				class="max-700:hidden flex flex-col justify-between items-stretch"
			>
				<Line
					class="w-full"
					theme="border"
					type="right"
				/>

				<Line
					class="w-full"
					theme="border"
					type="right"
				/>
			</li>

			<li class="border border-border">
				<CardProject />
			</li>

			<li
				class="max-700:hidden flex flex-col justify-between items-stretch"
			>
				<Line
					class="w-full"
					theme="border"
					type="left"
				/>

				<Line
					class="w-full"
					theme="border"
					type="left"
				/>
			</li>

			<li class="max-700:hidden flex items-end">
				<Line
					class="w-full"
					theme="border"
					type="right"
				/>
			</li>

			<li class="border-b border-l border-r border-border">
				<CardProject />
			</li>

			<li class="max-700:hidden flex items-end">
				<Line
					class="w-full"
					theme="border"
					type="left"
				/>
			</li>

			<li class="max-700:hidden flex items-end">
				<Line
					class="w-full"
					theme="border"
					type="right"
				/>
			</li>

			<li class="border-b border-l border-r border-border">
				<CardProject />
			</li>

			<li class="max-700:hidden flex items-end">
				<Line
					class="w-full"
					theme="border"
					type="left"
				/>
			</li>

			<li class="max-700:hidden flex items-end">
				<Line
					class="w-full"
					theme="border"
					type="right"
				/>
			</li>

			<li class="border-b border-l border-r border-border">
				<CardProject />
			</li>

			<li class="max-700:hidden flex items-end">
				<Line
					class="w-full"
					theme="border"
					type="left"
				/>
			</li>

			<li class="max-700:hidden flex items-end">
				<Line
					class="w-full"
					theme="border"
					type="right"
				/>
			</li>

			<li class="border-b border-l border-r border-border">
				<CardProject />
			</li>

			<li class="max-700:hidden flex items-end">
				<Line
					class="w-full"
					theme="border"
					type="left"
				/>
			</li>

			<li></li>

			<li class="border-l border-r border-border">
				<CardProject />
			</li>

			<li></li>
		</ul>
	</Block>
</div>
