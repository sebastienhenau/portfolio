const isDefault = require('./isDefault');
const setAtBreakpoint = require('./setAtBreakpoint');

module.exports = (theme, object, callback) => {
    return Object.entries(object).reduce((breakpoints, [key, value]) => {
        const props = callback(value);

        const result = isDefault(key) ? props : setAtBreakpoint(theme(`screens.${key}`), props);

        return {
            ...result,
            ...breakpoints,
        };
    }, {});
};
