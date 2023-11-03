import test from 'ava'
import RedBlackTree from '../red-black-tree.js'

test('inserts elements in the RedBlackTree', (t) => {
  const tree = new RedBlackTree()

  tree.insert(8)
  t.is(tree?.root?.isRed(), false)

  tree.insert(3)
  t.is(tree?.root?.left?.isRed(), true)

  tree.insert(10)
  t.is(tree?.root?.right?.isRed(), true)

  tree.insert(1)
  t.is(tree?.root?.left?.left?.isRed(), true)
  t.is(tree?.root?.left?.isRed(), false)
  t.is(tree?.root?.right?.isRed(), false)
})
