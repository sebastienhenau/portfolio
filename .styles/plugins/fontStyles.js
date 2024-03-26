import plugin from "tailwindcss/plugin";

export default plugin(({ addBase, addUtilities, theme }) => {
    const { variants, config } = theme("fontStyles");

    const generateBreakpoints = (breakpoints) => {
        return breakpoints.reduce((obj, { name, properties }) => {
            const breakpoint = theme(`screens.${name}`);

            return {
                ...obj,
                [`@media (min-width: ${breakpoint})`]: properties,
            };
        }, {});
    };

    const generateBaseItem = ({ base, properties, breakpoints = [], children = [] }, parent) => {
        if (!base) {
            return {};
        }

        const selector = `${parent} ${base}`;

        return {
            [selector]: {
                ...properties,
                ...generateBreakpoints(breakpoints),
            },
            ...generateBase(children, selector),
        };
    };

    const generateBase = (items, parent = "") => {
        return items.reduce((obj, item) => {
            return {
                ...obj,
                ...generateBaseItem(item, parent),
            };
        }, {});
    };

    const generateUtilityItem = ({ className, properties, breakpoints = [], variants = [] }, prefix) => {
        if (!className) {
            return {};
        }

        const selector = `${prefix}${className}`;

        return {
            [selector]: {
                ...properties,
                ...generateBreakpoints(breakpoints),
            },
            ...generateUtilities(variants, `${selector}.fsv-`),
        };
    };

    const generateUtilities = (items, prefix) => {
        return items.reduce((obj, item) => {
            return {
                ...obj,
                ...generateUtilityItem(item, prefix),
            };
        }, {});
    };

    addBase(generateBase(config));

    addUtilities({
        ...generateUtilities(config, ".fs-"),
        ...generateUtilities(variants, ".fsv-"),
    });
});
