/**
 * @param {number[]} nums
 * @return {number}
 */

//  use dynamic programming

//  loop through the array
//  compare the current number with the sum
var maxSubArray = function (nums) {
  let sum = nums[0]
  let max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i])
    max = Math.max(max, sum)
  }
  return max
}
