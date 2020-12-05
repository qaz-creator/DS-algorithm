const symOfTwo = (arr1, arr2) => {
  // 1. array -> obj
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  // 2. combined the obj as array
  const combinedArray = [...set1, ...set2]

  //   3. loop through combinedArray, get newObj with value of el
  let newObj = {}
  for (const el of combinedArray) {
    if (el in newObj) {
      newObj[el]++
    } else {
      newObj[el] = 1
    }
  }

  //   4.loop through newObj, get output
  let output = []
  for (const el in newObj) {
    if (newObj[el] === 1) {
      output.push(Number(el))
    }
  }
  return output
}

function sym() {
  // 1. all arrays into one big array
  const arrayOfArrays = [...arguments]
  console.log(arrayOfArrays)
  //   2. loop through arrayOfArrays
  let output = arrayOfArrays[0]
  for (let i = 1; i < arrayOfArrays.length; i++) {
    output = symOfTwo(output, arrayOfArrays[i])
  }
  return output
}
console.log(sym([1, 2, 3], [2, 3, 4],[8,9,7]))

