/**
 * @template T
 * @class
 */
export class Node {
  /** @type {T} */
  value
  /** @type {Node<T> | null} */
  next

  /**
   * @param {T} value
   */
  constructor(value) {
    this.value = value
    this.next = null
  }
}
