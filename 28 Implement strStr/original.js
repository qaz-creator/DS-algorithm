/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// fix i in needle
// loop through haystack by j
var strStr = function (haystack, needle) {
  let i = 0
  for (let j = 0; j < haystack.length + 1; j++) {
    if (needle[i] !== undefined) {
      if (haystack[j] == needle[i]) {
        i++
      } else {
        j = j - i
        i = 0
      }
    } else {
      return j - needle.length
    }
  }
  return -1
}

console.log(strStr('mississippi', 'issip'))
