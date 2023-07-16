import LinkedList from './linked-list.js'
import { DoublyNode } from './doubly-node.js'

export default class DoublyLinkedList extends LinkedList {
  /** @type {DoublyNode | null} */
  #head
  /** @type {DoublyNode | null} */
  #tail
  #count

  constructor() {
    super()
    this.#head = null
    this.#tail = null
    this.#count = 0
  }

  /**
   * @param {number} value
   * @param {number} index
   * @timecomplexity O(n) where n is the length of the list
   * @spacecomplexity O(1)
   */
  insert(value, index) {
    const node = new DoublyNode(value)
    const prev = this.getElementAt(index - 1)
    const current = this.getElementAt(index)

    if (index < 0 || index > this.#count) {
      return false
    }

    if (!prev) {
      this.#head = node
    } else {
      prev.next = node
      node.prev = prev
    }

    if (!current) {
      this.#tail = node
    } else {
      node.next = current
      current.prev = node
    }

    this.#count++

    return true
  }

  size() {
    return this.#count
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
      current = current.next
      count++
    }

    return current
  }

  getTail() {
    return this.#tail
  }

  getHead() {
    return this.#head
  }
}
