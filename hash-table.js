import { defaultToString } from './utils.js'
import ValuePair from './value-pair.js'

/**
 * @template T, U
 */
export default class HashTable {
  /** @protected */
  toStrFn
  /**
   * @type Object.<number, ValuePair<T, U>>
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
    let i = 0
    while (i < hashTableKey.length) {
      hash += hashTableKey.charCodeAt(i)
      i++
    }
    return hash % 23
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
    const valuePair = new ValuePair(key, value)
    const tableKey = this.hashCode(key)
    this.table[tableKey] = valuePair
    return true
  }
}
