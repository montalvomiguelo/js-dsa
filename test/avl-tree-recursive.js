import test from 'ava';
import AVLTree from '../avl-tree-recursive.js';

test('maximum depth', (t) => {
  const bst = new AVLTree();
  bst.insert(3);
  bst.insert(2);
  t.is(bst.getNodeHeight(bst.root), 1);
});

test('balance factor', (t) => {
  const bst = new AVLTree();
  bst.insert(3);
  bst.insert(2);
  t.is(bst.getBalanceFactor(bst.root), 1);
});

test('left left rotation', (t) => {
  let tree = new AVLTree();
  tree.insert(1);
  tree.insert(2);
  t.like(tree.rotateLeft(tree.root), {
    key: 2,
    left: { key: 1, left: null, right: null },
    right: null,
  });
});

test('right right rotation', (t) => {
  let tree = new AVLTree();
  tree.insert(2);
  tree.insert(1);
  t.like(tree.rotateRight(tree.root), {
    key: 1,
    left: null,
    right: { key: 2, left: null, right: null },
  });
});

test('insert node', (t) => {
  const tree = new AVLTree();
  tree.insert(40);
  tree.insert(50);
  tree.insert(60);
  t.like(tree.root, {
    key: 50,
    left: { key: 40, left: null, right: null },
    right: { key: 60, left: null, right: null },
  });
});

test('delete node', (t) => {
  const tree = new AVLTree();
  tree.insert(40);
  tree.insert(50);
  tree.insert(20);
  tree.insert(30);
  t.like(tree.remove(50), {
    key: 30,
    left: { key: 20, left: null, right: null },
    right: { key: 40, left: null, right: null },
  });
});
