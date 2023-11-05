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
          // case 2A: node is right child - left rotate
          if (node === parent.right) {
            node = parent
            this.leftRotate(node)
          }
          // case 3A: node is left child - right rotate
          parent.color = Colors.BLACK
          grandParent.color = Colors.RED
          this.rightRotate(grandParent)
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
          // case 2B: node is left child - right rotate
          if (node === parent.left) {
            node = parent
            this.rightRotate(node)
          }
          // case 3B: node is right child - left rotate
          parent.color = Colors.BLACK
          grandParent.color = Colors.RED
          this.leftRotate(grandParent)
        }
      }
    }
    /** @type {RedBlackNode<T>} */ (this.root).color = Colors.BLACK
  }

  /**
   * @param {RedBlackNode<T>} node
   */
  leftRotate(node) {
    const tmp = /** @type {RedBlackNode<T>} */ (node.right)
    node.right = tmp.left
    if (tmp.left) {
      tmp.left.parent = node
    }
    tmp.parent = node.parent
    if (node.parent === null) {
      this.root = tmp
    } else if (node === node.parent.left) {
      node.parent.left = tmp
    } else {
      node.parent.right = tmp
    }

    tmp.left = node
    node.parent = tmp
  }

  /**
   * @param {RedBlackNode<T>} node
   */
  rightRotate(node) {
    const tmp = /** @type {RedBlackNode<T>} */ (node.left)
    node.left = tmp.right
    if (tmp.right) {
      tmp.right.parent = node
    }
    tmp.parent = node.parent
    if (node.parent === null) {
      this.root = tmp
    } else if (node === node.parent.right) {
      node.parent.right = tmp
    } else {
      node.parent.left = tmp
    }
    tmp.right = node
    node.parent = tmp
  }
}
