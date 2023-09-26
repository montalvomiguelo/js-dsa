import { defaultToString } from './utils.js'
import ValuePair from './value-pair.js'
import LinkedList from './linked-list.js'

/**
 * @template T,U
 */
export default class HashTableSeparateChaining {
  /** @protected */
  toStrFn
  /**
   * @type Object.<number, LinkedList<ValuePair<T, U>>|undefined>
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
      hash = +hashTableKey.charCodeAt(i)
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
    const valuePair = new ValuePair(key, value)
    const tableKey = this.hashCode(key)
    this.table[tableKey] ||= new LinkedList()
    this.table[tableKey]?.push(valuePair)
    return true
  }
}