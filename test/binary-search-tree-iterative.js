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

test('remove a leaf node', (t) => {
  const bst = new BST(8)
  bst.insert(3)
  bst.insert(1)
  bst.insert(4)
  bst.insert(10)
  bst.insert(14)
  t.like(bst.remove(14), {
    value: 8,
    left: {
      value: 3,
      left: { value: 1, left: null, right: null },
      right: { value: 4, left: null, right: null },
    },
    right: { value: 10, left: null, right: null },
  })
})

test('remove a node with 1 children', (t) => {
  const bst = new BST(8)
  bst.insert(3)
  bst.insert(1)
  bst.insert(4)
  bst.insert(10)
  bst.insert(14)
  t.like(bst.remove(10), {
    value: 8,
    left: {
      value: 3,
      left: { value: 1, left: null, right: null },
      right: { value: 4, left: null, right: null },
    },
    right: { value: 14, left: null, right: null },
  })
})

test('in-order traversal', (t) => {
  /** @type {number[]} */
  const result = []
  const bst = new BST(3)
  bst.insert(2)
  bst.insert(6)
  bst.insert(5)
  bst.insert(4)
  bst.insert(7)
  bst.inOrder((node) => result.push(node.value))
  t.like(result, [2, 3, 4, 5, 6, 7])
})

test('pre-order traversal', (t) => {
  /** @type {number[]} */
  const result = []
  const bst = new BST(3)
  bst.insert(2)
  bst.insert(6)
  bst.insert(5)
  bst.insert(4)
  bst.insert(7)
  bst.preOrder((node) => result.push(node.value))
  t.like(result, [3, 2, 6, 5, 4, 7])
})

test('post-order traversal', (t) => {
  /** @type {number[]} */
  const result = []
  const bst = new BST(3)
  bst.insert(2)
  bst.insert(6)
  bst.insert(5)
  bst.insert(4)
  bst.insert(7)
  bst.postOrder((node) => result.push(node.value))
  t.like(result, [2, 4, 5, 7, 6, 3])
})
