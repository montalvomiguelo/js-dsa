import test from 'ava'
import AVLTree from '../avl-tree.js'

test('maximum depth', (t) => {
  const bst = new AVLTree(3)
  bst.insert(2)
  bst.insert(6)
  bst.insert(5)
  bst.insert(4)
  bst.insert(7)
  t.is(bst.getNodeHeight(), 3)
})
