import { Node } from './node.js'
import LinkedList from './linked-list.js'

export default class CircularLinkedList extends LinkedList {
  /** @type {Node | null} */
  #head
  /** @type {Node | null} */
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
   */
  insert(value, index) {
    const node = new Node(value)
    const current = this.getElementAt(index)
    const previous = this.getElementAt(index - 1)

    if (current === undefined) {
      return false
    }

    if (!current) {
      this.#head = node
      node.next = this.#head
    } else {
      node.next = current
      if (current.next === current) {
        current.next = node
        this.#head = node
      } else if (previous) {
        previous.next = node
        node.next = previous.next
      }
    }

    this.#count++
    return true
  }

  getHead() {
    return this.#head
  }

  getTail() {
    return this.#tail
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
      count++
      current = current.next
    }

    return current
  }
}
