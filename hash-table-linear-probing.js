import { defaultToString } from './utils.js'
import ValuePair from './value-pair.js'

/**
 * @template T,U
 */
export default class HashTableLinearProbing {
  /** @protected */
  toStrFn
  /**
   * @type {Object<string, ValuePair<T, U>|undefined>}
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

  /**
   * @param {T} key
   */
  get(key) {
    const tableKey = this.hashCode(key)
    let valuePair = this.table[tableKey]
    if (!valuePair) {
      return
    }
    let idx = tableKey
    while (valuePair) {
      if (valuePair.key === key) {
        break
      }
      idx++
      valuePair = this.table[idx]
    }
    if (!valuePair) {
      return
    }
    return valuePair.value
  }

  /**
   * @param {T} key
   */
  remove(key) {
    const tableKey = this.hashCode(key)
    let valuePair = this.table[tableKey]
    if (!valuePair) {
      return false
    }
    let idx = tableKey
    while (valuePair) {
      if (key === valuePair.key) {
        delete this.table[idx]
        this.verifyRemoveSideEffect(key, idx)
        break
      }
      idx++
      valuePair = this.table[idx]
    }
    return true
  }

  /**
   * @param {T} lastRemovedKey
   * @param {number} lastRemovedIdx
   */
  verifyRemoveSideEffect(lastRemovedKey, lastRemovedIdx) {
    const tableKey = this.hashCode(lastRemovedKey)
    let idx = lastRemovedIdx + 1
    let valuePair = this.table[idx]
    while (valuePair) {
      const hashCode = this.hashCode(valuePair.key)
      if (hashCode <= tableKey || hashCode <= lastRemovedIdx) {
        this.table[lastRemovedIdx] = valuePair
        delete this.table[idx]
        lastRemovedIdx = idx
      }
      idx++
      valuePair = this.table[idx]
    }
  }
}
