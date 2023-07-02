import test from 'ava'
import Queue from '../queue.js'

test('adds a new element at the back of the queue', (t) => {
  const queue = new Queue()

  t.is(queue.size(), 0)

  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)

  t.is(queue.size(), 3)
})

test('removes the first element from the queue', (t) => {
  const queue = new Queue()

  t.is(queue.dequeue(), undefined)

  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)

  t.is(queue.size(), 3)

  t.is(queue.dequeue(), 1)

  t.is(queue.size(), 2)
  t.is(queue.peek(), 2)
})

test('returns the first element from the queue', (t) => {
  const queue = new Queue()

  t.is(queue.peek(), undefined)

  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)

  t.is(queue.peek(), 1)
})

test('checks if the queue is empty', (t) => {
  const queue = new Queue()

  t.true(queue.isEmpty())

  queue.enqueue(1)

  t.false(queue.isEmpty())
})

test('removes all elements', (t) => {
  const queue = new Queue()

  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)

  t.is(queue.size(), 3)

  queue.clear()

  t.is(queue.size(), 0)
})

test('prints the content of the queue', (t) => {
  const queue = new Queue()

  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)

  t.is(queue.toString(), '1,2,3')
})
