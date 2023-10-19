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
      return 0
    }
    let leftCount = 0
    let rightCount = 0
    if (node.left) {
      leftCount++
      leftCount += this.getNodeHeight(node.left)
    }
    if (node.right) {
      rightCount++
      rightCount += this.getNodeHeight(node.right)
    }
    return Math.max(leftCount, rightCount)
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
