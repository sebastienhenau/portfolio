import {
	convertToEm,
	convertToRem,
	getFontSizeScale,
} from "./.styles/functions";
import { container } from "./.styles/plugins";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	corePlugins: {
		container: false,
	},
	plugins: [
		container({
			width: convertToRem("1366px"),
			spacing: {
				DEFAULT: 5,
				700: 8,
				1200: 12,
			},
		}),
	],
	theme: {
		screens: {
			600: convertToEm("640px"),
			700: convertToEm("768px"),
			1000: convertToEm("1024px"),
			1200: convertToEm("1280px"),
			1500: convertToEm("1536px"),
		},
		colors: {
			// Tailwind specific
			transparent: "transparent",
			inherit: "inherit",
			// Custom colors
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
		/**
		 * Font size scale based on Carbon Design System
		 * https://carbondesignsystem.com/guidelines/typography/overview/#scale
		 */
		fontSize: getFontSizeScale(20),
		/**
		 * Spacing scale based on Carbon Design System: multiples of 2, 4
		 * and 8.
		 * https://carbondesignsystem.com/guidelines/spacing/overview/#spacing-scale
		 */
		spacing: {
			// Tailwind specific
			0: 0,
			// Custom scale
			1: convertToRem("2px"),
			2: convertToRem("4px"),
			3: convertToRem("8px"),
			4: convertToRem("12px"),
			5: convertToRem("16px"),
			6: convertToRem("24px"),
			7: convertToRem("32px"),
			8: convertToRem("40px"),
			9: convertToRem("48px"),
			10: convertToRem("64px"),
			11: convertToRem("80px"),
			12: convertToRem("96px"),
			13: convertToRem("120px"),
			14: convertToRem("160px"),
		},
		boxShadow: {
			border: "inset 0px 0px 0px 1px var(--tw-shadow-color)",
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-radial-tl":
					"radial-gradient(ellipse at left top, var(--tw-gradient-stops))",
				"gradient-radial-br":
					"radial-gradient(ellipse at right bottom, var(--tw-gradient-stops))",
			},
		},
	},
};
