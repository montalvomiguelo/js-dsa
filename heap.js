import { swap } from './utils.js'

export default class MinHeap {
  /** @type {number[]} */
  heap

  constructor() {
    this.heap = []
  }

  /**
   * @param {number} index
   */
  getLeftIndes(index) {
    return 2 * index + 1
  }

  /**
   * @param {number} index
   */
  getRightIndex(index) {
    return 2 * index + 2
  }

  /**
   * @param {number} index
   */
  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  /**
   * @param {number} value
   */
  insert(value) {
    if (!value) {
      return false
    }
    this.heap.push(value)
    this.siftUp(this.heap.length - 1)
    return true
  }

  /**
   * @param {number} index
   * @description
   * O(log n) time | O(1) space - where n is the length of the heap
   */
  siftUp(index) {
    let parent = this.getParentIndex(index)
    while (index > 0 && this.heap[parent] > this.heap[index]) {
      swap(this.heap, parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }

  getMin() {
    return this.heap[0]
  }
}
