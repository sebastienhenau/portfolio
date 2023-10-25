/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		colors: {
			site: {
				1: "hsl(var(--color-site-1) / <alpha-value>)",
				2: "hsl(var(--color-site-2) / <alpha-value>)",
			},
			text: {
				1: "hsl(var(--color-text-1) / <alpha-value>)",
				2: "hsl(var(--color-text-2) / <alpha-value>)",
				3: "hsl(var(--color-text-3) / <alpha-value>)",
			},
			accent: "hsl(var(--color-accent) / <alpha-value>)",
			border: "hsl(var(--color-border) / <alpha-value>)",
			shadow: "hsl(var(--color-border))",
		},
	},
	plugins: [],
};
