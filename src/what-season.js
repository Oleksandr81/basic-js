const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    //   throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (date === undefined) {
        return 'Unable to determine the time of year!';
    }

    if (isNaN(Date.parse(date))) {
        throw new Error('Invalid date!');
    }

    if (Object.getOwnPropertyNames(date).length !== 0) {
        throw new Error('Invalid date!');
    }


    // if (Object.getOwnPropertyNames(date)) {
    //     if (!Date.parse(date)) {
    //             if (date !== new Date()) {
    //                 throw new Error('Invalid date!');
    //                 }
    //             }    
    // } 




    let month = date.getMonth();

    const winter = [11, 0, 1],
        spring = [2, 3, 4],
        summer = [5, 6, 7],
        autumn = [8, 9, 10];

    if (winter.includes(month)) {
        return 'winter';
    } else if (spring.includes(month)) {
        return 'spring';
    } else if (summer.includes(month)) {
        return 'summer';
    } else if (autumn.includes(month)) {
        return 'autumn';
    } else {
        return 'Unable to determine the time of year!';
    }
}

module.exports = {
    getSeason
};
