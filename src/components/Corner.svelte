<script>
	export let type;

	const getRootClass = () => {
		switch (type) {
			case "tl":
				return `top-0 left-0`;
			case "tr":
				return `top-0 right-0`;
			case "br":
				return `bottom-0 right-0`;
			case "bl":
				return `bottom-0 left-0`;
		}
	};

	const getBeforeClass = () => {
		const defaultClass =
			"before:content-[''] before:absolute before:from-accent to:transparent before:w-full before:h-[1px] before:scale-x-50 before:group-hover:scale-x-100 before:transition-transform";

		switch (type) {
			case "tl":
				return `${defaultClass} before:top-0 before:left-0 before:bg-gradient-to-r before:origin-left`;
			case "tr":
				return `${defaultClass} before:top-0 before:right-0 before:bg-gradient-to-l before:origin-right`;
			case "br":
				return `${defaultClass} before:bottom-0 before:right-0 before:bg-gradient-to-l before:origin-right`;
			case "bl":
				return `${defaultClass} before:bottom-0 before:left-0 before:bg-gradient-to-r before:origin-left`;
		}
	};

	const getAfterClass = () => {
		const defaultClass =
			"after:content-[''] after:absolute after:w-[1px] after:h-full after:from-accent to:transparent after:scale-y-50 after:group-hover:scale-y-100 after:transition-transform";

		switch (type) {
			case "tl":
				return `${defaultClass} after:top-0 after:left-0 after:bg-gradient-to-b after:origin-top`;
			case "tr":
				return `${defaultClass} after:top-0 after:right-0 after:bg-gradient-to-b after:origin-top`;
			case "br":
				return `${defaultClass} after:bottom-0 after:right-0 after:bg-gradient-to-t after:origin-bottom`;
			case "bl":
				return `${defaultClass} after:bottom-0 after:left-0 after:bg-gradient-to-t after:origin-bottom`;
		}
	};
</script>

<span
	class={`inline-block absolute w-[30px] h-[30px] pointer-events-none ${getRootClass()} ${getBeforeClass()} ${getAfterClass()} ${
		$$props.class
	}`}
/>
