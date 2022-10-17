const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    //   throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let arr = n.split("-");
    console.log(arr);

    if (arr.length === 6) {
        for (let sym of arr) {
            if (isNaN(parseInt('0x' + sym, 16))) {
                console.log(false);
                return false;
            } else {
                console.log(true);
                return true;
            }
        }
    } else {
        console.log(false);
        return false;
    }
}
module.exports = {
    isMAC48Address
};
