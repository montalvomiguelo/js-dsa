import BST from './binary-search-tree-iterative.js'

export default class AVLTree extends BST {
  /**
   * @param {BST | null} node
   */
  getNodeHeight(node = this) {
    if (!node) {
      return 0
    }

    /** @type {BST[]} */
    const queue = []
    queue.push(node)

    let levelCount = 0

    while (queue.length) {
      levelCount++

      for (let i = 0; i < queue.length; i++) {
        const treeNode = queue.shift()

        if (treeNode?.left) {
          queue.push(treeNode?.left)
        }
        if (treeNode?.right) {
          queue.push(treeNode?.right)
        }
      }
    }
    return levelCount - 1
  }

  /**
   * @param {BST | null} node
   */
  getBalance(node = this) {
    return this.getNodeHeight(node?.left) - this.getNodeHeight(node?.right)
  }
}
