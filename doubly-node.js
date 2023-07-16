import { Node } from './node.js'

/**
 * @class
 */
export class DoublyNode extends Node {
  /** @type {DoublyNode | null} */
  prev
  /** @type {DoublyNode | null} */
  next

  /**
   * @param {number} value
   */
  constructor(value) {
    super(value)
    this.prev = null
    this.next = null
  }
}
