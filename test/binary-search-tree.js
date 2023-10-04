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
