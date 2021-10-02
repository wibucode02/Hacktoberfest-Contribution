/**
 * Password Generator
 * Usage: passwdGen(12); // mEZCWBnvm2!6h
 **/

module.exports.passwdGen = len => {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = ''
    for (var i = 0; i <= len; i++){
        var ranlen = ~~(Math.random() * chars.length)
        result += chars.substring(ranlen, ranlen + 1)
    }
    return result
}
