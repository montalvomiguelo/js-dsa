import { swap } from './utils.js'

/**
 * @param {Array<Array<number>>} graph
 * @param {number} src
 * @description
 * O(log v * (v + e)) time | O(v) space - where v is the number of vertices and e is the number of edges
 */
export default function dijkstra(graph, src) {
  /** @type {Array<number>} */
  const distances = new Array(graph.length).fill(Infinity)

  distances[src] = 0

  const minHeap = new MinHeap()
  minHeap.insert(src, 0)

  while (!minHeap.isEmpty()) {
    const { v: u } = minHeap.extract()

    for (let v = 0; v < graph.length; v++) {
      if (graph[u][v] !== 0 && distances[u] + graph[u][v] < distances[v]) {
        distances[v] = distances[u] + graph[u][v]
        minHeap.insert(v, distances[v])
      }
    }
  }

  return distances
}

class MinHeap {
  /**
   * @private
   * @type {{v: number, dist: number}[]}
   */
  heap

  constructor() {
    this.heap = []
  }

  isEmpty() {
    return this.heap.length === 0
  }

  /**
   * @param {number} index
   */
  getLeftIndex(index) {
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
   * @param {number} v
   * @param {number} dist
   */
  insert(v, dist) {
    this.heap.push({ v, dist })
    this.siftUp(this.heap.length - 1)
  }

  /**
   * @param {number} index
   * @description
   * O(log n) time | O(1) space - where n is the length of the heap
   */
  siftUp(index) {
    let parent = this.getParentIndex(index)
    while (index > 0 && this.heap[parent].dist > this.heap[index].dist) {
      swap(this.heap, parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }

  extract() {
    if (this.heap.length === 1) {
      return /** @type {{v: number, dist: number}} */ (this.heap.shift())
    }

    const root = this.heap[0]
    this.heap[0] = this.heap[this.heap.length - 1]
    this.heap.pop()
    this.siftDown(0)
    return root
  }

  /**
   * @param {number} index
   * @description
   * O(log n) time | O(log n) space - where n is the length of the heap
   */
  siftDown(index) {
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    let smallest = index
    const size = this.heap.length

    if (left < size && this.heap[left].dist < this.heap[smallest].dist) {
      smallest = left
    }
    if (right < size && this.heap[right].dist < this.heap[smallest].dist) {
      smallest = right
    }
    if (smallest !== index) {
      swap(this.heap, smallest, index)
      this.siftDown(smallest)
    }
  }
}
