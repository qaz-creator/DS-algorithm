/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let numAndIndex = {}
  for (let i = 0; i < nums.length; i++) {
    if (numAndIndex[nums[i]] >= 0) {
      return [i, numAndIndex[nums[i]]]
    } else {
      numAndIndex[target - nums[i]] = i
    }
  }
}
console.log(twoSum([2, 11, 7, 15], 9))

// put the target - nums[i] into {}
// check {} has the nums[i] 

