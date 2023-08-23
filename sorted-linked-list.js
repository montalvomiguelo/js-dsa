import { Node } from './node.js'
import LinkedList from './linked-list.js'

/**
 * @param {number} a
 * @param {number} b
 */
function defaultCompareFn(a, b) {
  if (a === b) {
    return 0
  }

  if (a < b) {
    return -1
  }

  return 1
}

export default class SortedLinkedList extends LinkedList {
  /** @type {import('./node.js').Node | null} */
  #head
  #count

  constructor(compareFn = defaultCompareFn) {
    super()
    this.#head = null
    this.#count = 0
    this.compareFn = compareFn
  }

  /**
   * @param {number} value
   * @param {number} index
   */
  insert(value, index = 0) {
    if (this.size() === 0) {
      const res = this._insert(value, index)
      return res
    }

    return this._insert(value, this.insertPosition(value))
  }

  /**
   * @param {number} value
   */
  insertPosition(value) {
    let index = 0
    let current = this.#head

    while (current) {
      if (this.compareFn(value, current.value) <= 0) {
        break
      } else {
        index++
        current = current.next
      }
    }

    return index
  }

  /**
   * @param {number} value
   * @param {number} index
   * @timecomplexity O(n) where n is the length of the list
   * @spacecomplexity O(1)
   */
  _insert(value, index) {
    const current = this.getElementAt(index)
    const previous = this.getElementAt(index - 1)
    const node = new Node(value)

    if (previous) {
      previous.next = node
    } else {
      this.#head = node
    }

    if (current) {
      node.next = current
    }

    this.#count++
    return true
  }

  /**
   * @param {number} index
   */
  getElementAt(index) {
    if (index < 0 || index > this.#count) {
      return undefined
    }

    let current = this.#head
    let count = 0

    while (current) {
      if (index === count) {
        break
      }
      count++
      current = current.next
    }

    return current
  }
}
