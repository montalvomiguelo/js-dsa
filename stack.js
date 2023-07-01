export default class Stack {
  /** @type {{ [key: number]: number }} */
  #items
  #count

  constructor() {
    this.#count = 0
    this.#items = {}
  }

  /**
   * @param {number} element
   */
  push(element) {
    this.#items[this.#count] = element
    this.#count++
  }

  size() {
    return this.#count
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.#items[this.#count - 1]
  }

  isEmpty() {
    return this.#count === 0
  }

  clear() {
    this.#items = {}
    this.#count = 0
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }

    this.#count--
    const result = this.#items[this.#count]
    delete this.#items[this.#count]
    return result
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }

    let objString = `${this.#items[0]}`
    for (let i = 1; i < this.#count; i++) {
      objString = `${objString},${this.#items[i]}`
    }
    return objString
  }
}
