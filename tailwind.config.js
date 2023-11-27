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
				background: "hsl(var(--color-site-background) / <alpha-value>)",
				accent: "hsl(var(--color-site-accent))",
				"contrast-1":
					"hsl(var(--color-site-contrast-1) / <alpha-value>)",
				"contrast-2":
					"hsl(var(--color-site-contrast-2) / <alpha-value>)",
			},
			accent: "hsl(var(--color-accent) / <alpha-value>)",
			"accent-contrast":
				"hsl(var(--color-accent-contrast) / <alpha-value>)",
			border: "hsl(var(--color-border) / <alpha-value>)",
			"border-alt": "hsl(var(--color-border-alt) / <alpha-value>)",
		},
		/**
		 * Font size scale based on Carbon Design System
		 * https://carbondesignsystem.com/guidelines/typography/overview/#scale
		 */
		fontSize: getFontSizeScale(22),
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
		borderRadius: {
			sm: "2px",
			DEFAULT: "4px",
			lg: "8px",
			xl: "16px",
			full: "100vmax",
		},
		borderWidth: {
			DEFAULT: "2px",
		},
		extend: {
			backgroundImage: {
				"gradient-radial-tl":
					"radial-gradient(ellipse at left top, var(--tw-gradient-stops))",
				"gradient-striped":
					"repeating-linear-gradient(45deg, transparent, transparent 2px, hsl(var(--color-accent) / 0.2) 2px, hsl(var(--color-site-background) / 0.2) 4px )",
			},
			gridTemplateRows: {
				"3-auto": "repeat(3, auto)",
			},
		},
	},
};
