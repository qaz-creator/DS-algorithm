/**
 * @param {number} n
 * @return {string}
 */

//  2 pointers
// let the countPointer go  
var countAndSay = function (n) {
  let finalString = '1'
  if (n === 1) return finalString

  let characterPointer = 0
  let countPointer = 0
  let stringInProgress = ''

  while (n > 1) {
    while (countPointer < finalString.length) {
      while (finalString[characterPointer] === finalString[countPointer]) {
        countPointer++
      }

      stringInProgress += (countPointer - characterPointer).toString()
      stringInProgress += finalString[characterPointer].toString()
      characterPointer = countPointer
    }

    finalString = stringInProgress
    stringInProgress = ''
    n--
    characterPointer = 0
    countPointer = 0
  }

  return finalString
}
