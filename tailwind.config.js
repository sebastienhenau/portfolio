import { convertToEm, convertToRem } from "./.styles/functions";
import { container } from "./.styles/plugins";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	corePlugins: {
		container: false,
	},
	plugins: [
		container({
			width: convertToRem("1200px"),
			spacing: {
				DEFAULT: 3,
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
		 * Font sizes generated by Utopia - fluid responsive design
		 * https://utopia.fyi/type/calculator/?c=640,16,1.2,1920,20,1.2,3,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l&g=s,l,xl,12
		 */
		fontSize: {
			// 11.11px → 13.89px
			1: "clamp(0.6944rem, 0.6075rem + 0.2172vw, 0.8681rem)",
			// 13.33px → 16.67px
			2: "clamp(0.8331rem, 0.7288rem + 0.2609vw, 1.0419rem)",
			// 16.00px → 20.00px
			3: "clamp(1rem, 0.875rem + 0.3125vw, 1.25rem)",
			// 19.20px → 24.00px
			4: "clamp(1.2rem, 1.05rem + 0.375vw, 1.5rem)",
			// 23.04px → 28.80px
			5: "clamp(1.44rem, 1.26rem + 0.45vw, 1.8rem)",
			// 27.65px → 34.56px
			6: "clamp(1.7281rem, 1.5122rem + 0.5398vw, 2.16rem)",
		},
		/**
		 * Spacing generated by Utopia - fluid responsive design
		 * https://utopia.fyi/space/calculator?c=640,16,1.2,1536,20,1.2,3,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,&g=s,l,xl,12
		 */
		spacing: {
			0: 0,
			// 4px → 5px
			1: "clamp(0.25rem, 0.2188rem + 0.0781vw, 0.3125rem)",
			// 8px → 10px
			2: "clamp(0.5rem, 0.4375rem + 0.1563vw, 0.625rem)",
			// 12px → 15px
			3: "clamp(0.75rem, 0.6563rem + 0.2344vw, 0.9375rem)",
			// 16px → 20px
			4: "clamp(1rem, 0.875rem + 0.3125vw, 1.25rem)",
			// 24px → 30px
			5: "clamp(1.5rem, 1.3125rem + 0.4688vw, 1.875rem)",
			// 32px → 40px
			6: "clamp(2rem, 1.75rem + 0.625vw, 2.5rem)",
			// 48px → 60px
			7: "clamp(3rem, 2.625rem + 0.9375vw, 3.75rem)",
			// 64px → 80px
			8: "clamp(4rem, 3.5rem + 1.25vw, 5rem)",
			// 96px → 120px
			9: "clamp(6rem, 5.25rem + 1.875vw, 7.5rem)",
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
