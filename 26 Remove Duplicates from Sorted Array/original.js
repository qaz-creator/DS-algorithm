/**
 * @param {number[]} nums
 * @return {number}
 */

//  fix j, loop through the array

// only when encounter not equal to nums[j]
// j++
// nums[j]= nums[i]
var removeDuplicates = function (nums) {
  let j = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j++
      nums[j] = nums[i]
    }
  }
  console.log(nums)
  return j + 1
}

console.log(removeDuplicates([1, 1, 2]))
