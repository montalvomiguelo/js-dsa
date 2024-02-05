import { swap } from './utils.js';
import MinHeap from './heap.js';

export default class MaxHeap extends MinHeap {
  /**
   * @param {number} index
   * O(log n) time | O(1) space - where n is the length of the heap
   */
  siftUp(index) {
    let parent = this.getParentIndex(index);
    while (index > 0 && this.heap[parent] < this.heap[index]) {
      swap(this.heap, parent, index);
      index = parent;
      parent = this.getParentIndex(index);
    }
  }

  /**
   * @param {number} index
   * @description
   * O(log n) time | O(log n) space - where n is the length of the heap
   */
  siftDown(index) {
    let greatest = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.heap.length;

    if (left < size && this.heap[left] > this.heap[greatest]) {
      greatest = left;
    }
    if (right < size && this.heap[right] > this.heap[greatest]) {
      greatest = right;
    }
    if (greatest !== index) {
      swap(this.heap, greatest, index);
      this.siftDown(greatest);
    }
  }
}
