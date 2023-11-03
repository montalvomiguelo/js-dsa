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

/** @enum {number} */
export const Colors = {
  RED: 0,
  BLACK: 1,
}

/**
 * @template T
 * @extends {TreeNode<T>}
 */
export class RedBlackNode extends TreeNode {
  /** @type {RedBlackNode<T> | null} */
  left
  /** @type {RedBlackNode<T> | null} */
  right
  /** @type {Colors} */
  color
  /** @type {RedBlackNode<T> | null} */
  parent

  /**
   * @param {T} key
   */
  constructor(key) {
    super(key)
    this.left = null
    this.right = null
    this.color = Colors.RED
    this.parent = null
  }

  isRed() {
    return this.color === Colors.RED
  }
}
