import BinarySearchTree from './binary-search-tree.js'
import { TreeNode as Node } from './node.js'

/**
 * @template {number} T
 * @extends BinarySearchTree<T>
 */
export default class AVLTree extends BinarySearchTree {
  /**
   * @param {Node<T> | null} node
   * @description
   * Average: O(log n) time | O(log n) space
   * Worst: O(n) time | O(n) space
   */
  getNodeHeight(node) {
    if (!node) {
      return -1
    }
    /** @type {number} */
    const leftCount = this.getNodeHeight(node.left)
    /** @type {number} */
    const rightCount = this.getNodeHeight(node.right)
    return Math.max(leftCount, rightCount) + 1
  }

  /**
   * @param {Node<T> | null} node
   * @description
   * Average: O(log n) time | O(log n) space
   * Worst: O(n) time | O(n) space
   */
  getBalanceFactor(node) {
    if (!node) {
      return 0
    }
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
  }

  /**
   * @param {T} key
   */
  insert(key) {
    this.root = this.insertNode(this.root, key)
  }

  /**
   * @param {import('./node').TreeNode<T> | null} node
   * @param {T} key
   */
  insertNode(node, key) {
    if (!node) {
      return new Node(key)
    }
    if (this.compareFn(key, node.key) === -1) {
      node.left = this.insertNode(node.left, key)
    } else {
      node.right = this.insertNode(node.right, key)
    }
    const balanceFactor = this.getBalanceFactor(node)
    if (balanceFactor > 1) {
      if (node.left && this.compareFn(key, node.left.key) === -1) {
        node = this.rotateRight(node)
      } else if (node.left && this.compareFn(key, node.left.key) === 1) {
        node.left = this.rotateLeft(node.left)
        node = this.rotateRight(node)
      }
    }
    if (balanceFactor < -1) {
      if (node && node.right && this.compareFn(key, node.right.key) === 1) {
        node = this.rotateLeft(node)
      } else if (
        node &&
        node.right &&
        this.compareFn(key, node.right.key) === -1
      ) {
        node.right = this.rotateRight(node.right)
        node = this.rotateLeft(node)
      }
    }
    return node
  }

  /**
   * @param {Node<T> | null} node
   */
  rotateLeft(node) {
    const temp = node?.right ?? null
    if (temp && node) {
      node.right = temp.left
      temp.left = node
    }
    return temp
  }

  /**
   * @param {Node<T> | null} node
   */
  rotateRight(node) {
    const temp = node?.left ?? null
    if (temp && node) {
      node.left = temp.right
      temp.right = node
    }
    return temp
  }

  /**
   * @param {Node<T> | null} node
   * @param {T} key
   * @description
   * Time complexity O(log n) where n is the number of nodes in the tree
   * Space complexity O(h)
   */
  removeNode(node, key) {
    node = super.removeNode(node, key)
    const balanceFactor = this.getBalanceFactor(node)
    if (balanceFactor > 1) {
      if (node?.left && this.compareFn(key, node.left.key) === 1) {
        node = this.rotateRight(node)
      }
    } else if (balanceFactor < -1) {
      if (node?.right && this.compareFn(key, node.right.key) === -1) {
        node = this.rotateLeft(node)
      }
    }
    return node
  }
}
