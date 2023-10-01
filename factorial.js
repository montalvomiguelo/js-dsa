/**
 * @param {number} number
 * @timecomplexity O(n)
 * @spacecomplexity O(1)
 */
export function iterative(number) {
  if (number < 0) return
  let total = 1
  for (let i = number; i > 1; i--) {
    total = total * i
  }
  return total
}

/**
 * @param {number} number
 * @timecomplexity O(n)
 * @spacecomplexity O(n)
 */
export function recursive(number) {
  if (number < 0) return
  let total = 1
  if (number > 1) {
    total *= number
    const result = recursive(number - 1)
    if (result) {
      total *= result
    }
  }
  return total
}
