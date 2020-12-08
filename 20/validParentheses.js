//if the character input is included in (,[,{
// push it to the stack

// if not, compare with the last character in the stack
//if match, pop out that character from the stack
// if not match, false

//if the stack is empty after the loop
//true , or false
var isValid = function (s) {
  let stack = []

  for (let character of s) {
    if (character == '(' || character == '{' || character == '[') {
      stack.push(character)
    } else if (character === ')' && stack[stack.length - 1] === '(') {
      stack.pop()
    } else if (character === ']' && stack[stack.length - 1] === '[') {
      stack.pop()
    } else if (character === '}' && stack[stack.length - 1] === '{') {
      stack.pop()
    } else return false
  }
  return stack.length === 0
}

console.log(isValid('{[]}'))
