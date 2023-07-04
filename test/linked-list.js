import test from 'ava'
import LinkedList from '../linked-list.js'

test('adds a new element to the end of the list', (t) => {
  const list = new LinkedList()

  t.is(list.size(), 0)

  list.push(1)
  list.push(2)

  t.is(list.size(), 2)
})

test('returns the index of the element in the list', (t) => {
  const list = new LinkedList()

  list.push(1)
  list.push(2)

  t.is(list.indexOf(2), 1)
  t.is(list.indexOf(3), -1)
})

test('returns an element given its position', (t) => {
  const list = new LinkedList()

  list.push(1)
  list.push(2)
  list.push(3)

  t.not(list.getElementAt(1), undefined)
  t.is(list.getElementAt(4), undefined)
})
