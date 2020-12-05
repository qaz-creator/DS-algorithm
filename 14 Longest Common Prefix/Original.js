/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  let result = ''
  //  1. get null strs
  if (strs.length == 0) return result

  // 2. nonNull strs
  //strs = strs.sort((a, b) => b.length - a.length)
  for (let j = 0; j < strs[0].length; j++) {
    let index = 0
    for (let i = 0; i < strs.length - 1; i++) {
      if (strs[i][j] !== strs[i + 1][j]) {
        return result
      } else {
        index = i
      }
    }
    result += strs[index][j]
  }
  return result
}

console.log(longestCommonPrefix(['flds', 'flsdfsa', 'fljki']))

