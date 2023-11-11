import test from 'ava'
import MaxHeap from '../max-heap.js'

test('inserts values in the MaxHeap', (t) => {
  const heap = new MaxHeap()
  heap.insert(10)
  heap.insert(8)
  heap.insert(7)
  heap.insert(5)
  heap.insert(4)
  heap.insert(11)
  t.like(heap.heap, [11, 8, 10, 5, 4, 7])
})

test('extracts the maximum value in the MaxHeap', (t) => {
  const heap = new MaxHeap()
  heap.insert(11)
  heap.insert(8)
  heap.insert(10)
  heap.insert(5)
  heap.insert(4)
  heap.insert(7)
  heap.insert(1)
  t.is(heap.extract(), 11)
  t.like(heap.heap, [10, 8, 7, 5, 4, 1])
})

test('returns the max value in the MaxHeap', (t) => {
  const heap = new MaxHeap()
  heap.insert(10)
  heap.insert(8)
  heap.insert(7)
  heap.insert(5)
  heap.insert(4)
  heap.insert(11)
  t.is(heap.getMin(), 11)
})
