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
      return
    }
    const newNode = this.insertNode(this.root, key)
    this.fixTreeProperties(newNode)
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
    while (node?.parent?.color === Colors.RED && node !== this.root) {
      // case A:node.parent is left child
      if (node.parent.parent?.left === node.parent) {
        const uncle = node.parent.parent.right

        // case 1A: uncle of node is also red - only recoloring
        if (uncle?.color === Colors.RED) {
          node.parent.parent.color = Colors.RED
          node.parent.color = Colors.BLACK
          uncle.color = Colors.BLACK
          node = node.parent.parent
        } else {
          // case 2A: node is right child - left rotate
          if (node === node.parent.right) {
            node = node.parent
            this.leftRotate(node)
          }
          // case 3A: node is left child - right rotate
          if (node.parent && node.parent.parent) {
            node.parent.color = Colors.BLACK
            node.parent.parent.color = Colors.RED
            this.rightRotate(node.parent.parent)
          }
        }
        // case B:node.parent is right child
      } else if (node.parent.parent) {
        const uncle = node.parent.parent.left

        // case 1B: uncle is red - only recoloring
        if (uncle?.color === Colors.RED) {
          node.parent.parent.color = Colors.RED
          node.parent.color = Colors.BLACK
          uncle.color = Colors.BLACK
          node = node.parent.parent
        } else {
          // case 2B: node is left child - right rotate
          if (node === node.parent.left) {
            node = node.parent
            this.rightRotate(node)
          }
          // case 3B: node is right child - left rotate
          if (node.parent && node.parent.parent) {
            node.parent.color = Colors.BLACK
            node.parent.parent.color = Colors.RED
            this.leftRotate(node.parent.parent)
          }
        }
      }
    }
    if (this.root) this.root.color = Colors.BLACK
  }

  /**
   * @param {RedBlackNode<T>} node
   */
  leftRotate(node) {
    const tmp = node.right
    if (!tmp) return
    node.right = tmp.left
    if (tmp.left) {
      tmp.left.parent = node
    }
    tmp.parent = node.parent
    if (!node.parent) {
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
    const tmp = node.left
    if (!tmp) return
    node.left = tmp.right
    if (tmp.right) {
      tmp.right.parent = node
    }
    tmp.parent = node.parent
    if (!node.parent) {
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
