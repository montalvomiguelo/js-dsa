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
   * @timecomplexity Average O(log n) where n is the number of nodes, Worst O(n)
   * @spacecomplexity O(h) where h is the height of the tree
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

  /**
   * @param {(node: Node<T>) => void} callback
   */
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  /**
   * @param {Node<T>|null} node
   * @param {(node: Node<T>) => void} callback}
   * @timecomplexity O(n) where n is the number of nodes
   * @spacecomplexity O(h) where h is the height of the tree
   */
  inOrderTraverseNode(node, callback) {
    if (node) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
}
