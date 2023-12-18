import { swap } from './utils.js'

/**
 * @param {number[]} array
 * @description
 * O(n^2) time | O(1) space
 */
export default function selectionSort(array) {
  let indexMin
  for (let i = 0; i < array.length - 1; i++) {
    indexMin = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin)
    }
  }
  return array
}
