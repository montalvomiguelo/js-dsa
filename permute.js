/**
 * @param {number[]} nums
 * @return {number[][]}
 * @timecomplexity O(n * n!) where n is the length of nums
 * @spacecomplexity O(n * n!) where n is the length of nums
 */
export default function permute(nums) {
  /** @type {number[][]} */
  const permutations = []
  helper(0, nums, permutations)
  return permutations
}

/**
 * @param {number} i
 * @param {number[]} nums
 * @param {number[][]} permutations
 */
function helper(i, nums, permutations) {
  if (i === nums.length) {
    permutations.push(nums.slice())
  }
  else {
    for (let j = i; j < nums.length; j++) {
      swap(nums, i, j)
      helper(i + 1, nums, permutations)
      swap(nums, i, j)
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} i
 * @param {number} j
 */
function swap(nums, i, j) {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
