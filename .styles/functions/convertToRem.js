const { extractUnitFromString, extractNumberFromString } = require('../utils');

const convertPxToRem = (value) => {
    return value / 16;
};

module.exports = (value, withUnit = true) => {
    const unit = extractUnitFromString(value);
    const number = extractNumberFromString(value);
    let result = null;

    if (unit === 'px') {
        result = convertPxToRem(number);
    } else if (unit === 'em') {
        result = number;
    } else {
        return value;
    }

    return withUnit ? `${result}rem` : result;
};
