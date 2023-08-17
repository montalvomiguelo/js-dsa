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
   * @timecomplexity O(n) where n is the number of nodes in the list
   * @spacecomplexity O(1)
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
      this.#tail = node
      node.next = this.#head
    } else {
      node.next = current
      if (!previous) {
        this.#head = node
      } else {
        node.next = previous.next
        previous.next = node
      }
      if (this.#tail) {
        if (this.#tail.next === current) {
          this.#tail.next = this.#head
        }
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
   * @timecomplexity O(n) where n is the number of nodes in the list
   * @spacecomplexity O(1)
   */
  removeAt(index) {
    const current = this.getElementAt(index)
    const previous = this.getElementAt(index - 1)

    if (!current) {
      return
    }

    if (!previous) {
      this.#head = current.next
      current.next = null
      if (this.#tail) {
        this.#tail.next = this.#head
      }
    } else {
      previous.next = current.next
      current.next = null
      if (current === this.#tail) {
        this.#tail = previous
      }
    }

    this.#count--
    return current
  }

  /**
   * @param {number} index
   * @timecomplexity O(n) where n is the number of nodes in the list
   * @spacecomplexity O(1)
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
