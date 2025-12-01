/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let a=String(x).split("").reverse().join("")
    return a==x
};