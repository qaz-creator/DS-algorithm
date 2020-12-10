/**
 * @param {number} n
 * @return {number}
 */

//  what can the position be before the final step?
// n - 1, or n - 2 
var climbStairs = function (n) {
  let result = [0, 1, 2]

  for (let i = 3; i < n + 1; i++) {
    result[i] = result[i - 1] + result[i - 2]
  }
  return result[n]
}

console.log(climbStairs(4))
