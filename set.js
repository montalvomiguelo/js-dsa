export default class Set {
  constructor() {
    /** @type {Record<number, number>} */
    this.items = {}
  }

  /**
   * @param {number} element
   */
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  /**
   * @param {number} element
   */
  add(element) {
    if (this.has(element)) {
      return false
    }

    this.items[element] = element
    return true
  }

  /**
   * @param {number} element
   */
  delete(element) {
    if (!this.has(element)) {
      return false
    }

    return delete this.items[element]
  }

  clear() {
    this.items = {}
  }

  /**
   * @timecomplexity O(n) where n is the number of items in the list
   */
  size() {
    let count = 0
    for (let key in this.items) {
      if (Object.prototype.hasOwnProperty.call(this.items, key)) {
        count++
      }
    }
    return count
  }

  /**
   * @timecomplexity O(n) where n is the number if items in the list
   */
  values() {
    let values = []

    for (let key in this.items) {
      if (Object.prototype.hasOwnProperty.call(this.items, key)) {
        values.push(this.items[key])
      }
    }

    return values
  }

  /**
   * @param {Set} set
   * @timecomplexity O(n + m)
   * @spacecomplexity O(n + m)
   */
  union(set) {
    const result = new Set()
    for (const value of this.values()) {
      result.add(value)
    }
    for (const value of set.values()) {
      result.add(value)
    }
    return result
  }

  /**
   * @param {Set} set
   * @timecomplexity O(n)
   * @spacecomplexity O(n)
   */
  intersection(set) {
    if (set.size() < this.size()) {
      return set.union(this)
    }
    const result = new Set()
    for (const value of this.values()) {
      if (set.has(value)) {
        result.add(value)
      }
    }
    return result
  }
}
