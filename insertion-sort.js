import { swap } from './utils.js'

/**
 * @param {number[]} array
 */
export default function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j - 1] > array[j]) {
      swap(array, j, j - 1)
      j--
    }
  }
  return array
}
