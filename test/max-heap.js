import test from 'ava'
import MaxHeap from '../max-heap.js'

test('inserts values in the Maxheap', (t) => {
  const heap = new MaxHeap()
  heap.insert(10)
  heap.insert(8)
  heap.insert(7)
  heap.insert(5)
  heap.insert(4)
  heap.insert(11)
  t.like(heap.heap, [11, 8, 10, 5, 4, 7])
})

test('extracts the maximum value in the Maxheap', (t) => {
  const heap = new MaxHeap()
  heap.insert(20)
  heap.insert(18)
  heap.insert(17)
  heap.insert(15)
  heap.insert(14)
  heap.insert(21)
  t.is(heap.extract(), 21)
  t.like(heap.heap, [20, 18, 17, 15, 14])
})

test('returns the max value in the Maxheap', (t) => {
  const heap = new MaxHeap()
  heap.insert(10)
  heap.insert(8)
  heap.insert(7)
  heap.insert(5)
  heap.insert(4)
  heap.insert(11)
  t.is(heap.getMin(), 11)
})
