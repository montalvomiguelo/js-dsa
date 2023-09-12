import { defaultToString } from './utils.js'
import ValuePair from './value-pair.js'

/**
 * @template T, U
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
}
