import test from 'ava'
import BST from '../binary-search-tree-iterative.js'

test('insert', (t) => {
  const bst = new BST(8)
  bst.insert(3)
  bst.insert(1)
  bst.insert(4)
  bst.insert(10)
  t.like(bst.insert(14), {
    value: 8,
    left: {
      value: 3,
      left: { value: 1, left: null, right: null },
      right: { value: 4, left: null, right: null },
    },
    right: {
      value: 10,
      left: null,
      right: { value: 14, left: null, right: null },
    },
  })
})

test('contains', (t) => {
  const bst = new BST(8)
  bst.insert(3)
  bst.insert(1)
  bst.insert(4)
  bst.insert(10)
  bst.insert(14)
  t.true(bst.contains(14))
  t.false(bst.contains(7))
})
