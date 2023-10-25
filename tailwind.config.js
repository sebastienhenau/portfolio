import { convertToEm } from "./.styles/functions";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		screens: {
			600: convertToEm("640px"),
			700: convertToEm("768px"),
			1000: convertToEm("1024px"),
			1200: convertToEm("1280px"),
			1500: convertToEm("1536px"),
		},
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
