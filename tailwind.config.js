import tailwindCssContainerQueries from '@tailwindcss/container-queries';

import { convertToEm, convertToRem, getFontSizeScale } from './.styles/functions';
import { fontStyles, themes } from './.styles/plugins';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts,md}'],
    corePlugins: {
        container: false,
    },
    plugins: [themes, fontStyles, tailwindCssContainerQueries],
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
        themes: {
            light: {
                '--color-site-base': '0 100% 100%',
                '--color-site-contrast-1': '222 30% 16%',
                '--color-site-contrast-2': '215 16% 47%',
                '--color-accent-base': '14 83% 66%',
                '--color-accent-contrast': '222 30% 16%',
                '--color-line': '222 30% 16%',
                '--color-outline': '0 0% 0%',
            },
            dark: {
                '--color-site-base': '223 30% 18%',
                '--color-site-contrast-1': '30 100% 99%',
                '--color-site-contrast-2': '215 16% 70%',
                '--color-accent-base': '14 83% 66%',
                '--color-accent-contrast': '0 0% 0%',
                '--color-line': '0 0% 0%',
                '--color-outline': '30 100% 99%',
            },
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
            line: 'hsl(var(--color-line) / <alpha-value>)',
            outline: 'hsl(var(--color-outline) / <alpha-value>)',
        },
        fontFamily: {
            sans: [
                'DM Sans',
                'ui-sans-serif',
                'system-ui',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji',
            ],
        },
        /**
         * Font size scale based on Carbon Design System
         * https://carbondesignsystem.com/guidelines/typography/overview/#scale
         */
        fontSize: getFontSizeScale(22),
        fontStyles: ({ theme }) => ({
            config: [
                {
                    className: 'title-1',
                    base: 'h1',
                    properties: {
                        'font-weight': theme('fontWeight.bold'),
                        'font-size': theme('fontSize.6'),
                        'line-height': theme('lineHeight.normal'),
                    },
                    breakpoints: [
                        {
                            name: 700,
                            properties: {
                                'font-size': theme('fontSize.8'),
                            },
                        },
                    ],
                },
                {
                    className: 'title-2',
                    base: 'h2',
                    properties: {
                        'font-weight': theme('fontWeight.bold'),
                        'font-size': theme('fontSize.6'),
                        'line-height': theme('lineHeight.normal'),
                    },
                },
                {
                    className: 'title-3',
                    base: 'h3',
                    properties: {
                        'font-weight': theme('fontWeight.bold'),
                        'font-size': theme('fontSize.5'),
                        'line-height': theme('lineHeight.normal'),
                    },
                },
                {
                    className: 'text',
                    base: 'p',
                    properties: {
                        'font-weight': theme('fontWeight.normal'),
                        'font-size': theme('fontSize.5'),
                        'line-height': theme('lineHeight.normal'),
                    },
                    children: [
                        {
                            base: 'strong',
                            properties: {
                                'font-weight': theme('fontWeight.bold'),
                                'font-size': 'inherit',
                                'line-height': 'inherit',
                            },
                        },
                        {
                            base: 'a',
                            properties: {
                                'font-weight': 'inherit',
                                'font-size': 'inherit',
                                'line-height': 'inherit',
                                'text-decoration': 'underline',
                            },
                        },
                    ],
                    variants: [
                        {
                            className: 'fat',
                            properties: {
                                'font-weight': theme('fontWeight.bold'),
                            },
                        },
                    ],
                },
                {
                    className: 'action',
                    properties: {
                        'font-weight': theme('fontWeight.bold'),
                        'font-size': theme('fontSize.5'),
                        'line-height': theme('lineHeight.normal'),
                    },
                },
                {
                    className: 'label',
                    properties: {
                        'font-weight': theme('fontWeight.bold'),
                        'font-size': theme('fontSize.4'),
                        'line-height': theme('lineHeight.normal'),
                    },
                    variants: [
                        {
                            className: 'sm',
                            properties: {
                                'font-size': theme('fontSize.2'),
                            },
                        },
                    ],
                },
            ],
            variants: [
                {
                    className: 'flat',
                    properties: {
                        'line-height': theme('lineHeight.none'),
                    },
                },
            ],
        }),
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
            /* TODO: remove gradient-diagonal-striped once development is done */
            backgroundImage: {
                'gradient-striped':
                    'repeating-linear-gradient(45deg, transparent, transparent 2px, hsl(var(--color-accent-base) / 0.2) 2px, hsl(var(--color-site-base) / 0.2) 4px)',
                'gradient-vertical-dashed':
                    'repeating-linear-gradient(to bottom,transparent 0 4px, hsl(var(--color-line)) 4px 8px)',
                'gradient-diagonal-striped':
                    'repeating-linear-gradient(45deg, hsl(var(--color-site-base)), hsl(var(--color-site-base)) 8px, hsl(var(--color-line)) 8px, hsl(var(--color-line)) 16px)',
            },
            content: {
                empty: "''",
            },
            width: {
                border: '2px',
            },
            gridTemplateRows: {
                '3-auto': 'repeat(3, auto)',
            },
        },
    },
};
