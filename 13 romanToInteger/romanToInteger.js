/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // create a "map" for lookup
  var romanLookup = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  // console.log(s.split('')): ['V','I','I','I']
  // split : string -> array
  return s.split('').reduce((acc, curr, index) => {
    var next = s[index + 1]
    // case: current num is LESS than the next number
    if (romanLookup[curr] < romanLookup[next] && next !== undefined) {
      acc -= romanLookup[curr]
    } else {
      acc += romanLookup[curr]
    }
    return acc
  }, 0)
}

console.log(romanToInt('VIII'))

