import test from 'ava'
import MinHeap from '../heap.js'

test('inserts values in the MinHeap', (t) => {
  const heap = new MinHeap()
  heap.insert(3)
  heap.insert(2)
  heap.insert(1)
  t.like(heap.heap, [1, 3, 2])
})
