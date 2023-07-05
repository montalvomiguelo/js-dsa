import { Node } from './node.js'

export default class LinkedList {
  /** @type {Node | null} */
  #head
  #count

  constructor() {
    this.#head = null
    this.#count = 0
  }

  /**
   * @param {number} value
   */
  push(value) {
    const node = new Node(value)
    this.#count++

    if (!this.#head) {
      this.#head = node
      return
    }

    let current = this.#head

    while (current.next) {
      current = current.next
    }

    current.next = node
  }

  size() {
    return this.#count
  }

  /**
   * @param {number} value
   */
  indexOf(value) {
    let current = this.#head
    let index = 0

    while (current) {
      if (current.value === value) {
        return index
      }
      index++
      current = current.next
    }

    return -1
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

  /**
   * @param {number} index
   */
  removeAt(index) {
    let count = 0
    let current = this.#head
    let previous = null

    if (index < 0 || index > this.#count || this.size() === 0) {
      return undefined
    }

    while (current) {
      if (count === index) {
        break
      }
      previous = current
      current = current.next
      count++
    }

    if (!previous) {
      this.#head = current?.next ?? null
    } else {
      previous.next = current?.next ?? null
    }

    this.#count--
    return current
  }
}
