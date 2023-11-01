import BinarySearchTree from './binary-search-tree.js'
import { RedBlackNode } from './node.js'
import { Colors } from './node.js'
import { defaultCompareFn } from './utils.js'

/**
 * @template {number} T
 * @extends {BinarySearchTree<T>}
 */
export default class RedBlackTree extends BinarySearchTree {
  /** @type {RedBlackNode<T> | null} */
  root

  constructor(compareFn = defaultCompareFn) {
    super(compareFn)
    this.root = null
  }

  /**
   * @param {T} key
   */
  insert(key) {
    if (this.root === null) {
      this.root = new RedBlackNode(key)
      this.root.color = Colors.BLACK
    } else {
      const newNode = this.insertNode(this.root, key)
      // TODO: fix tree properties
    }
  }

  /**
   * @param {RedBlackNode<T>} node
   * @param {T} key
   * @return {RedBlackNode<T>}
   */
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === -1) {
      if (node.left === null) {
        node.left = new RedBlackNode(key)
        node.left.parent = node
        return node.left
      }
      return this.insertNode(node.left, key)
    }
    if (node.right === null) {
      node.right = new RedBlackNode(key)
      node.right.parent = node
      return node.right
    }
    return this.insertNode(node.right, key)
  }
}
