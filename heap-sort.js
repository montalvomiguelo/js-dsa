import { swap } from './utils.js';

/**
 * @param {number[]} array
 * @description
 * O(n log n) time | O(1) space - where n is the length of the heap
 */
export default function heapSort(array) {
  const heapSize = array.length;

  // Build max heap
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    heapify(array, heapSize, i);
  }

  // Heap sort
  for (let i = heapSize - 1; i >= 0; i--) {
    swap(array, i, 0);
    heapify(array, i, 0);
  }

  return array;
}

/**
 * @param {number[]} array
 * @param {number} heapSize
 * @param {number} index
 */
function heapify(array, heapSize, index) {
  let largest = getLargest(array, heapSize, index);

  while (largest !== index) {
    swap(array, largest, index);
    index = largest;
    largest = getLargest(array, heapSize, index);
  }
}

/**
 * @param {number[]} array
 * @param {number} heapSize
 * @param {number} index
 */
function getLargest(array, heapSize, index) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }
  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }
  return largest;
}
