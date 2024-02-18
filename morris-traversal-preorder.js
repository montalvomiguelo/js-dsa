/** @template T @typedef {import('./node').TreeNode<T>} TreeNode */

/**
 * @template T
 * @param {TreeNode<T>|null} root
 * @param {(node: TreeNode<T>|null) => void} callback
 */
export function morrisTraversalPreorder(root, callback) {
  let current = root;
  while (current) {
    if (current.left === null) {
      // If the current node has no left child, visit it and move to the right.
      callback(current);
      current = current.right;
      continue;
    }

    // Find the rightmost node in the left subtree (predecessor).
    let predecessor = current.left;
    while (predecessor.right && predecessor.right !== current) {
      predecessor = predecessor.right;
    }

    if (predecessor.right === null) {
      // Make the current node the right child of its predecessor.
      predecessor.right = current;
      callback(current);
      current = current.left;
    } else {
      // Revert the change made in the previous step.
      predecessor.right = null;
      current = current.right;
    }
  }
}
