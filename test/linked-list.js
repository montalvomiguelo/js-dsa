import test from 'ava'
import LinkedList from '../linked-list.js'

test('adds a new element to the end of the list', (t) => {
  const list = new LinkedList()

  t.is(list.size(), 0)

  list.push(1)
  list.push(2)

  t.is(list.size(), 2)
})
