import DoublyLinkedList from './doubly-linked-list.js'

export default class StackLinkedList {
  /* import('./doubly-node').DoublyNode */
  items

  constructor() {
    this.items = new DoublyLinkedList()
  }

  /**
   * @param {number} value
   */
  push(value) {
    return this.items.push(value)
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items.pop()
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.items.size()
  }

  peek() {
    if (this.isEmpty()) {
      return
    }

    return this.items.getTail()
  }

  toString() {
    return this.items.toString()
  }

  clear() {
    this.items.clear()
  }
}
