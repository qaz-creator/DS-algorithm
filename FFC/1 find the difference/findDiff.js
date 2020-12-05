const symOfTwo = (arr1, arr2) => {
  const output = []
  for (const el of arr1) {
    if (!output.includes(el) && !arr2.includes(el)) {
      output.push(el)
    }
  }
  for (const el of arr2) {
    if (!output.includes(el) && !arr1.includes(el)) {
      output.push(el)
    }
  }
  return output
}

// sym of multiple
function sym() {
  // arguments is the arguments naturally
  const arrayOfArray = [...arguments]
  console.log(arrayOfArray)
  let output = arrayOfArray[0]
  for (let i = 1; i < arrayOfArray.length; i++) {
    output = symOfTwo(output, arrayOfArray[i])
  }
  // make the output ordered
  return output.sort((a, b) => a - b)
}

console.log(sym([1, 2, 3], [3, 2, 5], [3, 2, 6]))
