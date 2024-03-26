export default {
    plugins: {
        /**
         * TODO: postcss-functions import from .styles
         */
        "postcss-functions": {
            functions: {
                rem: (value) => {
                    return `${value / 16}rem`;
                },
            },
        },
        "postcss-import": {},
        "tailwindcss/nesting": {},
        tailwindcss: {},
        autoprefixer: {},
    },
};
