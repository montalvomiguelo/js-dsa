import { defaultToString } from './utils.js'
import ValuePair from './value-pair.js'

/**
 * @template T,U
 */
export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    /** @private */
    this.toStrFn = toStrFn
    /**
     * @type {Object.<string, ValuePair.<T, U>>}
     * @private
     */
    this.table = {}
  }

  /**
   * @param {T} key
   * @param {U} value
   */
  set(key, value) {
    if (key === null || value === null) {
      return false
    }
    const tableKey = this.toStrFn(key)
    const valuePair = new ValuePair(key, value)
    this.table[tableKey] = valuePair
    return true
  }

  /**
   * @param {T} key
   */
  hasKey(key) {
    const tableKey = this.toStrFn(key)
    return this.table[tableKey] !== undefined
  }

  /**
   * @param {T} key
   */
  remove(key) {
    if (!this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return false
    }
    return true
  }

  /**
   * @param {T} key
   */
  get(key) {
    return this.table[this.toStrFn(key)]?.value ?? undefined
  }

  /**
   * @timecomplexity O(n) where n is the number of items in the dictionary
   * @spacecomplexity O(n)
   */
  keyValues() {
    const result = []
    for (const key in this.table) {
      if (!Object.prototype.hasOwnProperty.call(this.table, key)) {
        continue
      }
      result.push(this.table[key])
    }
    return result
  }

  /**
   * @timecomplexity O(n) where n is the number of items in the dictionary
   * @spacecomplexity O(n)
   */
  keys() {
    const result = []
    for (const key in this.table) {
      if (!Object.prototype.hasOwnProperty.call(this.table, key)) {
        continue
      }
      result.push(key)
    }
    return result
  }

  /**
   * @timecomplexity O(n) where n is the number of items in the dictionary
   * @spacecomplexity O(n)
   */
  values() {
    const result = []
    for (const key in this.table) {
      if (!Object.prototype.hasOwnProperty.call(this.table, key)) {
        continue
      }
      result.push(this.table[key].value)
    }
    return result
  }

  /**
   * @template {(t: T, u: U) => V} S,V
   * @param {S} callback
   */
  forEach(callback) {
    const keyValues = this.keyValues()
    for (let i = 0; i < keyValues.length; i++) {
      const item = keyValues[i]
      const result = callback(item.key, item.value)
      if (!result) {
        break
      }
    }
  }

  size() {
    let count = 0
    for (const key in this.table) {
      if (Object.prototype.hasOwnProperty.call(this.table, key)) {
        count++
      }
    }
    return count
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.table = {}
  }

  /**
   * @timecomplexity O(n * m)
   * @spacecomplexity O(n * m)
   */
  toString() {
    const result = []
    const keyValues = this.keyValues()
    for (const entry of keyValues) {
      result.push(entry.toString())
    }
    return result.join(',')
  }
}
