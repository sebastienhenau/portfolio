import tailwindCssContainerQueries from '@tailwindcss/container-queries';

import { convertToEm, convertToRem, getFontSizeScale } from './.styles/functions';
import { container } from './.styles/plugins';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    corePlugins: {
        container: false,
    },
    plugins: [
        tailwindCssContainerQueries,
        container({
            width: convertToRem('1152px'),
            spacing: {
                DEFAULT: 5,
                700: 8,
                1200: 12,
            },
        }),
    ],
    theme: {
        screens: {
            300: convertToEm('375px'),
            500: convertToEm('576px'),
            600: convertToEm('640px'),
            700: convertToEm('768px'),
            900: convertToEm('992px'),
            1000: convertToEm('1024px'),
            1200: convertToEm('1280px'),
            1500: convertToEm('1536px'),
        },
        containers: {
            300: convertToRem('320px'),
            350: convertToRem('384px'),
            400: convertToRem('448px'),
            500: convertToRem('512px'),
            550: convertToRem('576px'),
            600: convertToRem('672px'),
            700: convertToRem('768px'),
            800: convertToRem('896px'),
            1000: convertToRem('1024px'),
            1100: convertToRem('1152px'),
            1200: convertToRem('1280px'),
        },
        colors: {
            // Tailwind specific
            transparent: 'transparent',
            inherit: 'inherit',
            // Custom colors
            site: {
                base: 'hsl(var(--color-site-base) / <alpha-value>)',
                'contrast-1': 'hsl(var(--color-site-contrast-1) / <alpha-value>)',
                'contrast-2': 'hsl(var(--color-site-contrast-2) / <alpha-value>)',
            },
            accent: {
                base: 'hsl(var(--color-accent-base) / <alpha-value>)',
                contrast: 'hsl(var(--color-accent-contrast) / <alpha-value>)',
            },
            border: 'hsl(var(--color-border) / <alpha-value>)',
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
            1: convertToRem('2px'),
            2: convertToRem('4px'),
            3: convertToRem('8px'),
            4: convertToRem('12px'),
            5: convertToRem('16px'),
            6: convertToRem('24px'),
            7: convertToRem('32px'),
            8: convertToRem('40px'),
            9: convertToRem('48px'),
            10: convertToRem('64px'),
            11: convertToRem('80px'),
            12: convertToRem('96px'),
            13: convertToRem('120px'),
            14: convertToRem('160px'),
        },
        borderRadius: {
            DEFAULT: '2px',
            full: '100vmax',
        },
        borderWidth: {
            DEFAULT: '2px',
        },
        extend: {
            backgroundImage: {
                'gradient-striped':
                    'repeating-linear-gradient(45deg, transparent, transparent 2px, hsl(var(--color-accent-base) / 0.2) 2px, hsl(var(--color-site-base) / 0.2) 4px )',
            },
            content: {
                empty: "''",
            },
            gridTemplateRows: {
                '2-auto': 'repeat(2, auto)',
                '3-auto': 'repeat(3, auto)',
            },
        },
    },
};
