const { extractUnitFromString, extractNumberFromString } = require("../utils");

const convertPxToEm = (value) => {
    return value / 16;
};

module.exports = (value, withUnit = true) => {
    const unit = extractUnitFromString(value);
    const number = extractNumberFromString(value);
    let result = null;

    if (unit === "px") {
        result = convertPxToEm(number);
    } else if (unit === "rem") {
        result = number;
    } else {
        return value;
    }

    return withUnit ? `${result}em` : result;
};
