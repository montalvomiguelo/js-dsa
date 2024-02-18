import test from 'ava';
import { morrisTraversalPreorder } from '../morris-traversal-preorder.js';
import { TreeNode } from '../node.js';

test('morris traversal preorder', (t) => {
  /** @type {TreeNode<number>} */
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(3);
  root.left.right = new TreeNode(4);
  root.right = new TreeNode(5);
  root.right.right = new TreeNode(6);
  /** @type {number[]} */
  const result = [];
  morrisTraversalPreorder(root, (node) => node && result.push(node.key));
  t.deepEqual(result, [1, 2, 3, 4, 5, 6]);
});
