const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    //   throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let arrNumber = [];
    let arrArray = [];
    let newN = n.toString().split('');

    for (let i = 0; i < newN.length; i++) {
        for (let j = 0; j < newN.length; j++) {
            // console.log('i: ' + i, 'j: ' +j );
            if (i === j) {
                continue;
            } else {
                console.log(newN[j]);
                arrNumber.push(newN[j]);
            }
        }
        console.log(arrNumber);

        arrArray.push(+arrNumber.join(''));
        arrNumber = [];
    }

    return (Math.max(...arrArray));
}

module.exports = {
    deleteDigit
};
