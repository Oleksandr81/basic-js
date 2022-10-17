const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    if (!Array.isArray(members)) {
        return false;
    }

    function onlyString(member) {
        if (typeof (member) === 'string') {
            return member;
        }
    }
    let dreamTeam = [];
    members = members.filter(onlyString);

    for (let member of members) {
        dreamTeam.push(member.trim().slice(0, 1).toUpperCase());
        console.log(dreamTeam);
    }
    dreamTeam = dreamTeam.sort().join('');
    return dreamTeam.length === 0 ? false : dreamTeam;
}

module.exports = {
    createDreamTeam
};
