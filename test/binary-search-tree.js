import test from 'ava'
import BinarySearchTree from '../binary-search-tree.js'

test('insert', (t) => {
  const tree = new BinarySearchTree()
  tree.insert(11)
  tree.insert(7)
  tree.insert(15)
  tree.insert(5)
  t.like(tree, {
    root: {
      key: 11,
      left: {
        key: 7,
        left: {
          key: 5,
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        key: 15,
        left: null,
        right: null,
      },
    },
  })
})

test('inOrderTraverse', (t) => {
  const tree = new BinarySearchTree()
  /** @type {number[]} */
  const visited = []
  tree.insert(8)
  tree.insert(3)
  tree.insert(10)
  tree.insert(1)
  tree.insert(6)
  tree.insert(4)
  tree.inOrderTraverse((node) => {
    visited.push(node.key)
  })
  t.like(visited, [1, 3, 4, 6, 8, 10])
})

test('preOrderTraverse', (t) => {
  const tree = new BinarySearchTree()
  /** @type {number[]} */
  const visited = []
  tree.insert(8)
  tree.insert(3)
  tree.insert(10)
  tree.insert(1)
  tree.insert(6)
  tree.insert(4)
  tree.preOrderTraverse((node) => {
    visited.push(node.key)
  })
  t.like(visited, [8, 3, 1, 6, 4, 10])
})
