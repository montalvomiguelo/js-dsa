import { Node } from './node.js'

export default class LinkedList {
  /** @type {Node | null} */
  head
  count

  constructor() {
    this.head = null
    this.count = 0
  }

  /**
   * @param {number} value
   */
  push(value) {
    const node = new Node(value)
    this.count++

    if (!this.head) {
      this.head = node
      return
    }

    let current = this.head

    while (current.next) {
      current = current.next
    }

    current.next = node
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.size() === 0
  }

  /**
   * @param {number} value
   */
  indexOf(value) {
    let current = this.head
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
    if (index < 0 || index > this.count) {
      return undefined
    }

    let current = this.head
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
    const current = this.getElementAt(index)
    const previous = this.getElementAt(index - 1)

    if (!current) {
      return undefined
    }

    if (!previous) {
      this.head = current.next
    } else {
      previous.next = current.next
    }

    this.count--
    return current
  }

  /**
   * @param {number} value
   * @param {number} index
   * @timecomplexity O(n) where n is the length of the list
   * @spacecomplexity O(1)
   */
  insert(value, index) {
    const current = this.getElementAt(index)
    const previous = this.getElementAt(index - 1)
    const node = new Node(value)

    if (current === undefined) {
      return false
    }

    if (previous) {
      previous.next = node
    } else {
      this.head = node
    }

    if (current) {
      node.next = current
    }

    this.count++
    return true
  }

  toString() {
    const result = []

    let node = this.head

    while (node) {
      result.push(node.value)
      node = node.next
    }

    return result.join(',')
  }

  getHead() {
    return this.head
  }
}
