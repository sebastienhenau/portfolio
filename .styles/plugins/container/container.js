import plugin from "tailwindcss/plugin";

import generateSpacing from "./generateSpacing.js";

export default plugin.withOptions((options = {}) => {
	const spacing = options.spacing ?? null;
	const width = options.width ?? null;

	const fillColumn = "minmax(0rem, 1fr)";

	return ({ addUtilities, theme }) => {
		addUtilities({
			".container": {
				// Generate the css variable: --container-spacing
				...generateSpacing(theme, spacing),

				// Full-bleed declaration
				width: "100vw",
				"margin-inline-start": "calc(50% - 50vw)",

				// Container based on css grid
				display: "grid",
				"grid-template-columns": `
					[bound-start] var(--container-spacing)
					[fill-start] ${fillColumn}
					[container-start]
					calc(min(${width}, 100% - (var(--container-spacing) * 2)))
					[container-end]
					${fillColumn} [fill-end]
					var(--container-spacing) [bound-end]
				`,
			},
			".container > *": {
				"grid-column": "container",
			},
			".stretch-container": {
				"grid-column": "container",
			},
			".stretch-bound": {
				"grid-column": "bound",
			},
		});
	};
});
