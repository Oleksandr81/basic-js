const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    //   throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let count = 1;
    let codeStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            if (count === 1) {
                codeStr += str[i];
            } else {
                codeStr += count + str[i];
                count = 1;
            }
        }
    }
    console.log(codeStr);
    return codeStr;
}

module.exports = {
    encodeLine
};
