import test from 'ava'
import AVLTree from '../avl-tree-recursive.js'

test('maximum depth', (t) => {
  const bst = new AVLTree()
  bst.insert(3)
  bst.insert(2)
  bst.insert(6)
  bst.insert(5)
  bst.insert(4)
  bst.insert(7)
  t.is(bst.getNodeHeight(bst.root), 2)
})

test('balance factor', (t) => {
  const bst = new AVLTree()
  bst.insert(3)
  bst.insert(2)
  bst.insert(6)
  bst.insert(5)
  bst.insert(4)
  bst.insert(7)
  t.is(bst.getBalanceFactor(bst.root), 0)
})

test('delete node', (t) => {
  const tree = new AVLTree()
  tree.insert(40)
  tree.insert(50)
  tree.insert(20)
  tree.insert(30)
  t.like(tree.remove(50), {
    key: 30,
    left: { key: 20, left: null, right: null },
    right: { key: 40, left: null, right: null },
  })
})
