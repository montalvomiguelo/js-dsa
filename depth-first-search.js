export default class Node {
  name
  /** @type {Node[]} */
  children

  /**
   * @param {string} name
   */
  constructor(name) {
    this.name = name
    this.children = []
  }

  /**
   * @param {string} name
   */
  addChild(name) {
    this.children.push(new Node(name))
    return this
  }

  /**
   * @param {string[]} array
   */
  depthFirstSearch(array) {
    /** @type {Node[]} */
    const stack = []
    stack.push(this)

    while (stack.length) {
      const node = stack.pop()
      if (!node) {
        break
      }
      array.push(node.name)
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i])
      }
    }

    return array
  }
}