import { defaultToString } from './utils.js'

export default class HashTable {
  /** @private */
  toStrFn
  table

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  /**
   * @template T
   * @param {T} key
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
}
