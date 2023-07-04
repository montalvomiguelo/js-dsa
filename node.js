/**
 * @class
 */
export class Node {
  /** @type {number} */
  value
  /** @type {Node | null} */
  next

  /**
   * @param {number} value
   */
  constructor(value) {
    this.value = value
    this.next = null
  }
}
