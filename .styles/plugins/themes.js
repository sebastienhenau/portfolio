import plugin from 'tailwindcss/plugin';

export default plugin(({ addBase, theme }) => {
    const { light, dark } = theme('themes');

    addBase({
        ':root': {
            ...light,
        },
        'html.dark': {
            ...dark,
        },
        '@media (prefers-color-scheme: dark)': {
            ...dark,
        },
    });
});
