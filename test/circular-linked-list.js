import test from 'ava'
import CircularLinkedList from '../circular-linked-list.js'

test('inserts an element at any position of the list', (t) => {
  const list = new CircularLinkedList()

  t.is(list.insert(1, 0), true)

  let head = list.getHead()

  if (head) {
    t.is(head.next, head)
    t.is(list.size(), 1)
  }

  const lastHead = head

  t.is(list.insert(2, 0), true)

  t.is(list.size(), 2)

  head = list.getHead()
  let element = list.getElementAt(1)

  if (head) {
    t.not(head, lastHead)
  }

  if (element) {
    t.is(element.next, head)
  }

  t.is(list.insert(3, 1), true)

  t.is(list.size(), 3)

  element = list.getElementAt(1)
  const prev = list.getElementAt(0)

  if (element) {
    if (prev) {
      t.is(prev.next, element)
      t.is(element.next, prev.next)
    }
  }
})

test('removes an invalid element from the list', (t) => {
  const list = new CircularLinkedList()

  t.is(list.removeAt(0), undefined)
})

test('removes an element from the beginnig of the list', (t) => {
  const list = new CircularLinkedList()

  list.insert(1, 0)
  list.insert(2, 1)
  list.insert(3, 2)

  const removed = list.removeAt(0)
  t.not(removed, null)

  if (removed) {
    t.is(removed.next, null)
  }

  t.is(list.size(), 2)

  const head = list.getHead()
  const element = list.getElementAt(0)
  const tail = list.getTail()

  if (head && element && tail) {
    t.is(element, head)
    t.is(tail.next, head)
  }
})
