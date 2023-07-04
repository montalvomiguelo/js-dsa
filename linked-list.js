import { Node } from './node.js'

export default class LinkedList {
  /** type {Node | null} */
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
}
