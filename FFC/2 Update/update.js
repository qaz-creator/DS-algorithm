const update = (arr1, arr2) => {
  // 1. arr -> Obj
  const Obj1 = arr1.reduce((acc, [value, name]) => {
    return {
      ...acc,
      [name]: value,
    }
  }, {})

  const Obj2 = arr2.reduce((acc, [value, name]) => {
    return {
      ...acc,
      [name]: value,
    }
  }, {})

  // 2. loop through Obj1, check if there is the same in Obj2
  for (const el in Obj2) {
    if (el in Obj1) {
      Obj1[el] += Obj2[el]
    } else {
      Obj1[el] = Obj2[el]
    }
  }
  // 3. convert Obj1 -> array
  let output = []
  for (el in Obj1) {
    output.push([el, Obj1[el]])
  }

  // 4. sort alphabetally
  return output.sort(function (a, b) {
    var textA = a[0].toUpperCase()
    var textB = b[0].toUpperCase()
    return textA < textB ? -1 : textA > textB ? 1 : 0
  })
}

var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
]

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
]

console.log(update(curInv, newInv))
// make the two arrays into one to update  the data
// output: [
//   [ 2, 'Dirty Sock' ],
//   [ 3, 'Hair Pin' ],
//   [ 3, 'Half-Eaten Apple' ],
//   [ 5, 'Microphone' ],
//   [ 7, 'Toothpaste' ],
//   [ 88, 'Bowling Ball' ]
// ]

