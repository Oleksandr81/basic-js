const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here

        let count = 1;
        let arraysCount = [];

        function countArray(a) {
            for (let i = 0; i < a.length; i++) {
                if (Array.isArray(a[i])) {
                    count++;
                    return countArray(a[i]);
                }
            }
            arraysCount.push(count);
            count = 1;
        }
        countArray(arr);
        
        console.log(Math.max(...arraysCount));
        
        return (Math.max(...arraysCount));
    }
}

module.exports = {
    DepthCalculator
};
