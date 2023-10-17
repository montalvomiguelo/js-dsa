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

  /**
   * @param {number} value
   * @param {BST | null} node
   * @description
   * Average: O(log(n)) time | O(1) space
   * Worst: O(n) time | O(1) space
   */
  contains(value, node = this) {
    let result = false
    while (node) {
      if (value < node.value) {
        node = node.left
      } else if (value > node.value) {
        node = node.right
      } else {
        result = true
        break
      }
    }
    return result
  }

  /**
   * @param {number} value
   * @param {BST | null} node
   * @param {BST | null} parent
   * @description
   * Average: O(log(n)) time | O(1) space
   * Worst: O(n) time | O(1) space
   */
  remove(value, node = this, parent = null) {
    while (node) {
      if (value < node.value) {
        parent = node
        node = node.left
      } else if (value > node.value) {
        parent = node
        node = node.right
      } else {
        // remove a leaf node
        if (parent && !node.left && !node.right) {
          if (value < parent.value) {
            parent.left = null
          } else {
            parent.right = null
          }
          break
        }
        // remove a node with 1 child
        if (parent && node.left && !node.right) {
          parent.left = node.left
          break
        }
        if (parent && node.right && !node.left) {
          parent.right = node.right
          break
        }
        // remove a node with 2 children
        if (node.right) {
          const min = node.right.min()
          if (min) {
            node.value = min.value
            node.right.remove(node.value, node)
          }
        }
      }
    }
    return this
  }

  /**
   * @param {BST | null} node
   */
  min(node = this) {
    while (node) {
      if (!node.left) {
        break
      }
      if (node.value < node.left.value) {
        node = node.left
      }
    }
    return node
  }

  /**
   * @param {(node: BST) => void} callback
   * @param {BST | null} node
   * @description
   * Average: O(n) time | O(h) space
   * Worst: O(n) time | O(n) space
   */
  inOrder(callback, node = this) {
    if (!callback) {
      return
    }
    /** @type {BST[]} */
    const stack = []
    /** @type {BST | null | undefined} */
    let current = node
    while (stack.length || current) {
      if (current) {
        stack.push(current)
        current = current.left
      } else {
        current = stack.pop()
        if (current) {
          callback(current)
          current = current.right
        }
      }
    }
  }

  /**
   * @param {(node: BST) => void} callback
   * @param {BST | null} node
   * @description
   * Average: O(n) time | O(h) space
   * Worst: O(n) time | O(n) space
   */
  preOrder(callback, node = this) {
    if (!callback) {
      return
    }
    /** @type {BST[]} */
    const stack = []
    /** @type {BST | null | undefined} */
    let current = node
    while (stack.length || current) {
      if (current) {
        stack.push(current)
        callback(current)
        current = current.left
      } else {
        current = stack.pop()
        if (current) {
          current = current.right
        }
      }
    }
  }

  /**
   * @param {(node: BST) => void} callback
   * @param {BST | null} node
   * @description
   * Average: O(n) time | O(h) space
   * Worst: O(n) time | O(n) space
   */
  postOrder(callback, node = this) {
    /** @type {BST | null | undefined} */
    let current = node
    const stack = []
    const stackRight = []
    while (current || stack.length) {
      if (current) {
        if (current.right) {
          stackRight.push(current.right)
        }
        stack.push(current)
        current = current.left
      } else {
        current = stack[stack.length - 1]
        if (
          stackRight.length &&
          current.right === stackRight[stackRight.length - 1]
        ) {
          current = stackRight.pop()
        } else {
          callback(current)
          stack.pop()
          current = null
        }
      }
    }
  }
}
