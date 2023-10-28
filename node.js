/**
 * @template T
 * @class
 */
export class Node {
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

/**
 * @template T
 */
export class TreeNode {
  key
  /** @type {TreeNode<T> | null} */
  left
  /** @type {TreeNode<T> | null} */
  right

  /**
   * @param {T} key
   */
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
