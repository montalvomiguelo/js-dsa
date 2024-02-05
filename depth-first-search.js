export default class Node {
  name;
  /** @type {Node[]} */
  children;

  /**
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  /**
   * @param {string} name
   */
  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  /**
   * @param {string[]} array
   * @param {Node} node
   * @timecomplexity O(n + e) where n is the number of nodes and e is the number of edges
   * @spacecomplexity O(n) where n is the number of nodes
   */
  depthFirstSearch(array, node = this) {
    array.push(node.name);
    for (let i = 0; i < node.children.length; i++) {
      this.depthFirstSearch(array, node.children[i]);
    }
    return array;
  }
}
