import BinarySearchTree from './binary-search-tree.js'

/**
 * @template {number} T
 * @extends BinarySearchTree<T>
 */
export default class AVLTree extends BinarySearchTree {
  /**
   * @param {import('./node').TreeNode<T> | null} node
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
   * @param {import('./node').TreeNode<T> | null} node
   * @description
   * Average: O(log n) time | O(log n) space
   * Worst: O(n) time | O(n) space
   */
  getBalance(node) {
    if (!node) {
      return
    }
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right)
  }
}
