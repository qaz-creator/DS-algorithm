/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// put nums2 into nums1, and make them sorted
// from the last one of nums1
// compare nums1[m] with nums2[n]
var merge = function (nums1, m, nums2, n) {
  m -= 1
  n -= 1
  while (n + 1) {
    if (nums1[m] >= nums2[n]) {
      nums1[m + n + 1] = nums1[m]
      m -= 1
    } else {
      nums1[m + n + 1] = nums2[n]
      n -= 1
    }
  }
}