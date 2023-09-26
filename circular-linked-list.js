import { Node } from './node.js'
import LinkedList from './linked-list.js'

/**
 * @template T
 * @extends LinkedList<T>
 */
export default class CircularLinkedList extends LinkedList {
  /** @type {Node<T> | null} */
  tail

  constructor() {
    super()
    this.tail = null
  }

  /**
   * @param {T} value
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
      this.head = node
      this.tail = node
      node.next = this.head
    } else {
      node.next = current
      if (!previous) {
        this.head = node
      } else {
        node.next = previous.next
        previous.next = node
      }
      if (this.tail) {
        if (this.tail.next === current) {
          this.tail.next = this.head
        }
      }
    }

    this.count++
    return true
  }

  getTail() {
    return this.tail
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
      this.head = current.next
      current.next = null
      if (this.tail) {
        this.tail.next = this.head
      }
    } else {
      previous.next = current.next
      current.next = null
      if (current === this.tail) {
        this.tail = previous
      }
    }

    this.count--
    return current
  }
}
