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
      this.fixTreeProperties(newNode)
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

  /**
   * @param {RedBlackNode<T>} node
   */
  fixTreeProperties(node) {
    while (node?.parent?.isRed() && node.color !== Colors.BLACK) {
      let parent = node.parent
      const grandParent = parent.parent
      // case A: parent is left child
      if (grandParent?.left === parent) {
        const uncle = grandParent.right

        // case 1A: uncle of node is also red - only recoloring
        if (uncle?.color === Colors.RED) {
          grandParent.color = Colors.RED
          parent.color = Colors.BLACK
          uncle.color = Colors.BLACK
          node = grandParent
        } else {
          // TODO: case 2A: node is right child - left rotate
          // TODO: case 3A: node is left child - right rotate
        }
        // case B: parent is right child
      } else if (grandParent) {
        const uncle = grandParent.left

        // case 1B: uncle is red - only recoloring
        if (uncle?.color === Colors.RED) {
          grandParent.color = Colors.RED
          parent.color = Colors.BLACK
          uncle.color = Colors.BLACK
          node = grandParent
        } else {
          // TODO: case 2B: node is left child - right rotate
          // TODO: case 3B: node is right child - left rotate
        }
      }
    }
    if (this.root) {
      this.root.color = Colors.BLACK
    }
  }
}
