
/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s || ''
    s = s.replace(/\s/g,"")
    console.log("S1: ",s)
    s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
    console.log("S2 : ",s)
    let s1 = [...s].reverse().join('')
    console.log("s1: ",s1)
    return s === s1
};