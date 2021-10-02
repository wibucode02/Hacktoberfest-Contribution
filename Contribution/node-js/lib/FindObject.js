/**
 * Find Object by value in Object of Array
 * FindObject(object, { key: 'a', value: 1 }); // [ { a: 1, b: 2, c: 4 }, { a: 1, b: 7, c: 8 } ]
 **/


// var object = [
//     { a: 1, b: 2, c: 4 },
//     { a: 2, b: 3, c: 5 },
//     { a: 3, b: 4, c: 6 },
//     { a: 1, b: 7, c: 8 },
// ]

module.exports.FindObject = (obj = [], key = {}) => {
    if (obj.findIndex(v => v[key?.key] == key?.value) < 0) return []
    return obj.filter(v => v[key?.key] == key?.value)
}
