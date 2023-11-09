import test from 'ava'
import MinHeap from '../heap.js'

test('inserts values in the MinHeap', (t) => {
  const heap = new MinHeap()
  heap.insert(2)
  heap.insert(3)
  heap.insert(4)
  heap.insert(5)
  heap.insert(1)
  t.like(heap.heap, [1, 2, 4, 5, 3])
})

test('extracts the minimum value in the MinHeap', (t) => {
  const heap = new MinHeap()
  heap.insert(2)
  heap.insert(3)
  heap.insert(4)
  heap.insert(5)
  heap.insert(1)
  t.is(heap.extract(), 1)
  t.like(heap.heap, [2, 3, 4, 5])
})

test('returns the minimum value in the MinHeap', (t) => {
  const heap = new MinHeap()
  heap.insert(2)
  heap.insert(3)
  heap.insert(4)
  heap.insert(5)
  heap.insert(1)
  t.is(heap.getMin(), 1)
})
