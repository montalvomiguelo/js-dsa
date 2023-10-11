export default class BST {
  value
  /**  @type {BST | null} */
  left
  /**  @type {BST | null} */
  right

  /**
   * @param {number} value
   */
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  /**
   * @param {number} value
   * @param {BST | null} node
   * @description
   * Average: O(log(n)) time | O(1) space
   * Worst: O(n) time | O(1) space
   */
  insert(value, node = this) {
    /** @type {BST | null} */
    let parent = null
    while (node) {
      parent = node
      if (value < node.value) {
        node = node.left
        if (!node) {
          parent.left = new BST(value)
        }
      } else {
        node = node.right
        if (!node) {
          parent.right = new BST(value)
        }
      }
    }
    return this
  }
}
