/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		colors: {
			background: "hsl(var(--color-background) / <alpha-value>)",
		},
	},
	plugins: [],
};
