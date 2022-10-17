const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    //   throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!Array.isArray(arr)) {
        throw new Error(`'arr' parameter must be an instance of the Array!`);
    }

    const transfornArray = [];

    function discarNext(i) {
        if ((i + 1) < arr.length && typeof(arr[i + 1]) === 'number') {
        }
    }

    function discardPrev(i) {
        if ((i - 1) > 0 && typeof(transfornArray[i - 1]) === 'number') {
            transfornArray.pop();
        }
    }

    function doublePrev(i) {
        if ((i - 1) >= 0 && typeof (transfornArray[i - 1]) === 'number') {
            if (arr[i - 2] === '--discard-next') {

            } else {
                transfornArray.push(arr[i - 1]);
            }
        }
    }

    function doubleNext(i) {
        if ((i + 1) < arr.length && typeof(arr[i + 1]) === 'number') {
            transfornArray.push(arr[i + 1]);
        }
    }

    
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            switch (arr[i]) {
                case '--discard-next': // виключає наступний елемент масиву з перетвореного масиву.
                    discarNext(i);
                    i++;
                    break;
                case '--discard-prev': // виключає попередній елемент масиву з перетвореного масиву.
                    discardPrev(i);
                    break;
                case '--double-prev': // дублює попередній елемент масиву в перетвореному масиві.
                    doublePrev(i);
                    break;
                case '--double-next': // дублює  наступний елемент масиву в перетвореному масиві.
                    doubleNext(i);
                    break;
                default:
                    transfornArray.push(arr[i]);
            }
        } else {
            transfornArray.push(arr[i]);
        }
    }
    return (transfornArray);

}

module.exports = {
    transform
};
