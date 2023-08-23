import LinkedList from './linked-list.js'

/**
 * @param {number} a
 * @param {number} b
 */
function defaultCompareFn(a, b) {
  if (a === b) {
    return 0
  }

  if (a < b) {
    return -1
  }

  return 1
}

export default class SortedLinkedList extends LinkedList {
  /**
   * @param {(a: number, b: number) => number} compareFn
   */
  constructor(compareFn = defaultCompareFn) {
    super()
    this.compareFn = compareFn
  }

  /**
   * @param {number} value
   * @param {number} index
   * @timecomplexity O(n) where n is the length of the list
   * @spacecomplexity O(1)
   */
  insert(value, index = 0) {
    if (this.size() === 0) {
      const res = super.insert(value, index)
      return res
    }

    return super.insert(value, this.insertPosition(value))
  }

  /**
   * @param {number} value
   */
  insertPosition(value) {
    let index = 0
    let current = this.head

    while (current) {
      if (this.compareFn(value, current.value) <= 0) {
        break
      } else {
        index++
        current = current.next
      }
    }

    return index
  }
}
