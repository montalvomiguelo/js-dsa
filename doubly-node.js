import { Node } from './node.js'

/**
 * @template T
 * @extends Node<T>
 * @class
 */
export class DoublyNode extends Node {
  /** @type {DoublyNode<T> | null} */
  prev
  /** @type {DoublyNode<T> | null} */
  next

  /**
   * @param {T} value
   */
  constructor(value) {
    super(value)
    this.prev = null
    this.next = null
  }
}
