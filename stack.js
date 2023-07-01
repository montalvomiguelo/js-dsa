export default class Stack {
  /** @type {number[]} */
  items

  constructor() {
    this.items = []
  }

  /**
   * @param {number} element
   */
  push(element) {
    this.items.push(element)
  }

  size() {
    return this.items.length
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }
}
