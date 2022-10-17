const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    //   throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        tempArr[i] = arr[i];
    }

    tempArr = tempArr.sort(function (a, b) {
        return a - b;
    }).filter(num => num !== -1);

    console.log(arr);
    console.log(tempArr);


    for (let i = 0, j = 0; i < arr.length; i++) {
        if (arr[i] !== -1) {
            arr[i] = tempArr[j];
            j++;
        }
    }
    return (arr);

}

module.exports = {
    sortByHeight
};
