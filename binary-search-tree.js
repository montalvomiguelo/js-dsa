import { defaultCompareFn } from './utils.js';
import { TreeNode as Node } from './node.js';

/**
 * @template {number} T
 */
export default class BinarySearchTree {
  /** @type {Node<T> | null} */
  root;

  constructor(compareFn = defaultCompareFn) {
    this.compareFn = compareFn;
    this.root = null;
  }

  /**
   * @param {T} key
   */
  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  /**
   * @param {Node<T>} node
   * @param {T} key
   * @description
   * Timecomplexity average O(log n) where n is the number of nodes, worst O(n)
   * Spacecomplexity O(h) where h is the height of the tree
   */
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === -1) {
      if (node.left) {
        this.insertNode(node.left, key);
      } else {
        node.left = new Node(key);
      }
    } else {
      if (node.right) {
        this.insertNode(node.right, key);
      } else {
        node.right = new Node(key);
      }
    }
  }

  /**
   * @param {(node: Node<T>) => void} callback
   */
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  /**
   * @param {Node<T>|null} node
   * @param {(node: Node<T>) => void} callback
   * @description
   * Timecomplexity O(n) where n is the number of nodes
   * Spacecomplexity O(h) where h is the height of the tree
   */
  inOrderTraverseNode(node, callback) {
    if (node) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  /**
   * @param {(node: Node<T>) => void} callback
   * @param {Node<T>|null} node
   * @description
   * Timecomplexity O(n) where n is the number of nodes
   * Spacecomplexity O(h) where h is the height of the tree
   */
  preOrderTraverse(callback, node = this.root) {
    if (node) {
      callback(node);
      this.preOrderTraverse(callback, node.left);
      this.preOrderTraverse(callback, node.right);
    }
  }

  /**
   * @param {(node: Node<T>) => void} callback
   * @param {Node<T>|null} node
   * @description
   * Timecomplexity O(n) where n is the number of nodes
   * Spacecomplexity O(h) where h is the height of the tree
   */
  postOrderTraverse(callback, node = this.root) {
    if (node) {
      this.postOrderTraverse(callback, node.left);
      this.postOrderTraverse(callback, node.right);
      callback(node);
    }
  }

  /**
   * @description
   * Time complexity average O(log n) where n is the number of nodes, worst O(n)
   * Space complexity O(h) where h is the height of the tree
   */
  min(node = this.root) {
    while (node) {
      if (!node.left) {
        break;
      }
      node = node.left;
    }
    return node;
  }

  /**
   * @description
   * Timecomplexity average O(log n) where n is the number of nodes, worst O(n)
   * Spacecomplexity O(h) where h is the height of the tree
   */
  max(node = this.root) {
    while (node) {
      if (!node.right) {
        return node;
      }
      node = node.right;
    }
  }

  /**
   * @param {T} key
   * @description
   * Timecomplexity average O(log n) where n is the number of nodes, worst O(n)
   * Spacecomplexity O(h) where h is the height of the tree
   */
  search(key) {
    let node = this.root;
    let result = null;

    while (node) {
      if (this.compareFn(key, node.key) === -1) {
        node = node.left;
      } else if (this.compareFn(key, node.key) === 1) {
        node = node.right;
      } else {
        result = node;
        break;
      }
    }

    return result;
  }

  /**
   * @param {T} key
   */
  remove(key) {
    this.root = this.removeNode(this.root, key);
    return this.root;
  }

  /**
   * @param {Node<T> | null} node
   * @param {T} key
   * @description
   * Time complexity O(log n) where n is the number of nodes in the tree
   * Space complexity O(h)
   */
  removeNode(node, key) {
    if (!node) {
      return node;
    }
    if (this.compareFn(key, node.key) === -1) {
      node.left = this.removeNode(node.left, key);
    } else if (this.compareFn(key, node.key) === 1) {
      node.right = this.removeNode(node.right, key);
    } else {
      // node is leaf
      if (!node.left && !node.right) {
        node = null;
        // node has one child
      } else if (!node.left) {
        node = node.right;
      } else if (!node.right) {
        node = node.left;
      } else {
        // node has two children
        const successor = this.min(node.right);
        if (successor) {
          node.key = successor.key;
          node.right = this.removeNode(node.right, successor.key);
        }
      }
    }
    return node;
  }
}
