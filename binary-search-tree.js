import { defaultCompareFn } from './utils.js'
import { TreeNode as Node } from './node.js'

/**
 * @template {number} T
 */
export default class BinarySearchTree {
  /** @type Node<T> | null */
  root

  constructor(compareFn = defaultCompareFn) {
    this.compareFn = compareFn
    this.root = null
  }

  /**
   * @param {T} key
   */
  insert(key) {
    if (!this.root) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  /**
   * @param {Node<T>} node
   * @param {T} key
   */
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === -1) {
      if (node.left) {
        this.insertNode(node.left, key)
      } else {
        node.left = new Node(key)
      }
    } else {
      if (node.right) {
        this.insertNode(node.right, key)
      } else {
        node.right = new Node(key)
      }
    }
  }
}
