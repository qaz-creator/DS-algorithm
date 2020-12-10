/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    // the last +1
  digits[digits.length - 1] += 1
//   add 0 in the beginning
  digits = [0].concat(digits)

//   check for 10
  for (let i = digits.length - 1; i > 0; i--) {
    if (digits[i] === 10) {
      digits[i] = 0
      digits[i - 1] += 1
    }
  }
  if (digits[0] === 0) {
    digits.shift()
  }
  return digits
}

console.log(plusOne([1, 9, 9]))
