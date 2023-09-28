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
   * @timecomplexity O(n + m)
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

  /**
   * @param {T} key
   * @timecomplexity O(n + m)
   */
  get(key) {
    const tableKey = this.hashCode(key)
    const linkedList = this.table[tableKey]
    if (!linkedList) {
      return
    }
    let current = linkedList.getHead()
    let valuePair
    while (current) {
      if (current.value.key === key) {
        valuePair = current.value.value
        break
      }
      current = current.next
    }
    return valuePair
  }

  /**
   * @param {T} key
   * @timecomplexity O(n + m)
   */
  remove(key) {
    const tableKey = this.hashCode(key)
    const linkedList = this.table[tableKey]
    if (!linkedList) {
      return false
    }
    let current = linkedList.getHead()
    let index = -1
    while (current) {
      if (current.value.key === key) {
        index++
        linkedList.removeAt(index)
        break
      }
      current = current.next
    }
    if (index === -1) {
      return false
    }
    if (linkedList.isEmpty()) {
      delete this.table[tableKey]
    }
    return true
  }
}
