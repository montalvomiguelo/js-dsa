/**
 * @param {number[]} array
 * @timecomplexity O(n) where n is the length of the input array
 * @spacecomplexity O(1)
 */
export default function hasSingleCycle(array) {
  const length = array.length
  const startIndex = 0
  let count = 0
  let index = 0

  while (count < length) {
    if (count > 0 && index === 0) {
      return false
    }
    const jumps = array[index]
    index = (index + jumps) % length
    if (index < 0) {
      index = length + index
    }
    count++
  }

  return index === startIndex
}
