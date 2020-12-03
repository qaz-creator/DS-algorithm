/**
 * @param {number} x
 * @return {number}
 * 
 * 
 * Input: x = 123
Output: 321
−231,  231 − 1
 */
const right = function (n) {
  const arr = ('' + n).split('')

  let result = []
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
  }
  const final = parseInt(result.join(''))
  if (final >= -Math.pow(2, 31) && final <= Math.pow(2, 31)-1) {
    return final
  } else {
    return 0
  }
}
const reverse = function (x) {
  if (x < 0 && x >= -Math.pow(2, 31)) {
    return 0 - right(-x)
  } else if (x >= 0 && x <= Math.pow(2, 31) - 1) {
    return right(x)
  } else {
    return 0
  }
}

console.log(reverse(1534974699))

