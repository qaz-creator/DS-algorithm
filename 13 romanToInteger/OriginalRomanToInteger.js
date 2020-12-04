/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let total = 0
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'I':
        total += 1
        break
      case 'V':
        total += 5
        break
      case 'X':
        total += 10
        break
      case 'L':
        total += 50
        break
      case 'C':
        total += 100
        break
      case 'D':
        total += 500
        break
      case 'M':
        total += 1000
        break
      default:
        return 'not valid roman numeral'
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    let twoChar = s[i] + s[i + 1]
    switch (twoChar) {
      case 'IV':
        total -= 2
        break
      case 'IX':
        total -= 2
        break
      case 'XL':
        total -= 20
        break
      case 'XC':
        total -= 20
        break
      case 'CD':
        total -= 200
        break
      case 'CM':
        total -= 200
        break
    }
  }
  return total
}

console.log(romanToInt('IL'))

