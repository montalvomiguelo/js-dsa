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
