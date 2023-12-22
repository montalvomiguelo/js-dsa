/**
 * @param {number[]} array
 * @returns {number[]}
 * @description
 * Time: O(n log(n))
 * Space: O(n log(n))
 */
export default function mergeSort(array) {
  if (array.length === 1) return array
  const middleIdx = Math.floor(array.length / 2)
  const left = mergeSort(array.slice(0, middleIdx))
  const right = mergeSort(array.slice(middleIdx))

  return mergeSortedArrays(left, right)
}

/**
 * @param {number[]} leftHalf
 * @param {number[]} rightHalf
 */
function mergeSortedArrays(leftHalf, rightHalf) {
  const sortedArray = new Array(leftHalf.length + rightHalf.length)
  let i = 0
  let j = 0
  let k = 0

  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] <= rightHalf[j]) {
      sortedArray[k] = leftHalf[i]
      i++
    } else {
      sortedArray[k] = rightHalf[j]
      j++
    }
    k++
  }

  while (i < leftHalf.length) {
    sortedArray[k] = leftHalf[i]
    i++
    k++
  }

  while (j < rightHalf.length) {
    sortedArray[k] = rightHalf[j]
    j++
    k++
  }

  return sortedArray
}
