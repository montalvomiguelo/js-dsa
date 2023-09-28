import { defaultToString } from './utils.js'
import ValuePair from './value-pair.js'

/**
 * @template T,U
 */
export default class HashTableLinearProbing {
  /** @protected */
  toStrFn
  /**
   * @type {Object<string, ValuePair<T, U>>}
   * @protected
   */
  table

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  /**
   * @param {T} key
   * @private
   */
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }
    const hashTableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0; i < hashTableKey.length; i++) {
      hash += hashTableKey.charCodeAt(i)
    }
    return hash % 37
  }

  /**
   * @param {T} key
   */
  hashCode(key) {
    return this.loseloseHashCode(key)
  }

  /**
   * @param {T} key
   * @param {U} value
   */
  put(key, value) {
    if (!key || !value) {
      return false
    }
    const tableKey = this.hashCode(key)
    if (!this.table[tableKey]) {
      this.table[tableKey] = new ValuePair(key, value)
    } else {
      let idx = tableKey + 1
      while (this.table[idx]) {
        idx++
      }
      this.table[idx] = new ValuePair(key, value)
    }

    return true
  }
}