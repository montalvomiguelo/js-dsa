import test from 'ava'
import RedBlackTree from '../red-black-tree.js'

test('inserts elements in the RedBlackTree', (t) => {
  const tree = new RedBlackTree()

  tree.insert(8)
  tree.insert(18)
  tree.insert(5)
  tree.insert(15)
  t.is(tree?.root?.isRed(), false)
  t.is(tree?.root?.left?.isRed(), false)
  t.is(tree?.root?.right?.isRed(), false)
  t.is(tree?.root?.right?.left?.isRed(), true)
})
