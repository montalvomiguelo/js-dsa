export default class Queue {
  /** @type {{ [key: number]: number }} */
  #items
  #count
  #lowestCount

  constructor() {
    this.#count = 0
    this.#lowestCount = 0
    this.#items = {}
  }

  /**
   * @param {number} element
   */
  enqueue(element) {
    this.#items[this.#count] = element
    this.#count++
  }

  size() {
    return this.#count - this.#lowestCount
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    const element = this.#items[this.#lowestCount]
    delete this.#items[this.#lowestCount]
    this.#lowestCount++
    return element
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.#items[this.#lowestCount]
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.#items = {}
    this.#count = 0
    this.#lowestCount = 0
  }

  toString() {
    const result = []

    if (this.isEmpty()) {
      return ''
    }

    for (let i = this.#lowestCount; i < this.#count; i++) {
      result.push(this.#items[i])
    }

    return result.join(',')
  }
}
