import test from 'ava'
import Stack from '../stack.js'

test('pushes elements', (t) => {
  const stack = new Stack()

  t.is(stack.size(), 0)

  stack.push(1)
  stack.push(2)
  stack.push(3)

  t.is(stack.size(), 3)
})

test('returns the top element', (t) => {
  const stack = new Stack()

  stack.push(1)
  stack.push(2)
  stack.push(3)

  t.is(stack.peek(), 3)
})
