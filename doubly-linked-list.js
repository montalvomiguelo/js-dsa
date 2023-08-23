import LinkedList from './linked-list.js'
import { DoublyNode } from './doubly-node.js'

export default class DoublyLinkedList extends LinkedList {
  /** @type {DoublyNode | null} */
  head
  /** @type {DoublyNode | null} */
  tail

  constructor() {
    super()
    this.head = null
    this.tail = null
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

    if (index < 0 || index > this.count) {
      return false
    }

    if (!prev) {
      this.head = node
    } else {
      prev.next = node
      node.prev = prev
    }

    if (!current) {
      this.tail = node
    } else {
      node.next = current
      current.prev = node
    }

    this.count++

    return true
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
      current = current.next
      count++
    }

    return current
  }

  /**
   * @param {number} index
   */
  removeAt(index) {
    const current = this.getElementAt(index)
    const prev = current?.prev ?? null
    const next = current?.next ?? null

    if (!current) {
      return
    }

    if (!prev) {
      this.head = next
      this.tail = prev

      if (next) {
        next.prev = null
      }

      current.next = null
    }

    if (!next) {
      this.head = prev

      if (prev) {
        prev.next = null
      }

      current.prev = null
    }

    if (prev && next) {
      prev.next = next
      next.prev = prev
      current.next = null
      current.prev = null
    }

    this.count--
    return current
  }

  getHead() {
    return this.head
  }

  getTail() {
    return this.tail
  }

  /**
   * @param {number} value
   * @timecomplexity O(1)
   */
  push(value) {
    const node = new DoublyNode(value)
    const tail = this.getTail()

    if (!tail) {
      this.tail = node
      this.head = node
    } else {
      node.prev = tail
      tail.next = node
      this.tail = node
    }

    this.count++
  }

  /**
   * @timecomplexity O(1)
   */
  pop() {
    const tail = this.getTail()

    if (!tail) {
      return
    } else {
      this.count--
      const prev = tail.prev
      if (prev) {
        prev.next = null
        tail.prev = null
      } else {
        this.tail = null
        this.head = null
      }
      return tail
    }
  }

  clear() {
    this.head = null
    this.tail = null
    this.count = 0
  }
}
