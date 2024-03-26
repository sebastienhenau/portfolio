import convertToRem from "./convertToRem.js";

export default (steps) => {
    const y0 = 8;
    const sizes = [y0];

    for (let step = 2; step <= steps; step++) {
        const xn1 = sizes[step - 2];
        const xn = xn1 + (Math.floor((step - 2) / 4) + 1) * 2;

        sizes.push(xn);
    }

    return sizes.reduce((obj, size, index) => {
        return {
            ...obj,
            [index + 1]: convertToRem(`${size}px`),
        };
    }, {});
};
