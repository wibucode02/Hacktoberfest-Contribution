const _ = require('lodash')
/**
 * Randomize Array
 * Usage: randomizeArray([1, 2, 3, 4, 5]); // [3, 1, 4, 2, 5]
 **/


module.exports.randomizeArray = (array = []) => _.uniq(array.map(v => array[~~(Math.random() * array.length)]))

/**
 * Randomize number
 * Usage: randomizeNumber(1, 5); // random number 1-5
 **/

module.exports.randomizeNumber = (from, to) => {
    const array = []
    for (i = from; i <= to; i++) array.push(i)
    return array[~~(Math.random() * array.length)]
}
