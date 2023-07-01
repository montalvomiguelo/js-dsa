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

test('checks if the stack is empty', (t) => {
  const stack = new Stack()

  t.true(stack.isEmpty())

  stack.push(1)

  t.false(stack.isEmpty())
})

test('removes all elements', (t) => {
  const stack = new Stack()

  stack.push(1)
  stack.push(2)
  stack.push(3)

  t.is(stack.size(), 3)

  stack.clear()

  t.is(stack.size(), 0)
})

test('removes the top element', (t) => {
  const stack = new Stack()

  stack.push(1)
  stack.push(2)
  stack.push(3)

  t.is(stack.size(), 3)

  stack.pop()

  t.is(stack.size(), 2)
  t.is(stack.peek(), 2)
})

test('prints the content of the stack ', (t) => {
  const stack = new Stack()

  stack.push(1)
  stack.push(2)
  stack.push(3)

  t.is(stack.toString(), '1,2,3')
})
