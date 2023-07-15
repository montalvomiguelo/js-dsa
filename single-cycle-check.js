/**
 * @param {number[]} array
 * @timecomplexity O(n) where n is the length of the input array
 * @spacecomplexity O(n)
 */
export default function hasSingleCycle(array) {
  const length = array.length
  const visited = new Array(length).fill(0)
  const startIndex = 0
  let count = 0
  let index = 0

  visited[0] = 0

  while (count < length) {
    const jumps = array[index]
    index = (index + jumps) % length
    if (index < 0) {
      index = length + index
    }
    visited[index] += 1
    count++
  }

  return visited.every((value) => value === 1) && index === startIndex
}
