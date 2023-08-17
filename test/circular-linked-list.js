import test from 'ava'
import CircularLinkedList from '../circular-linked-list.js'

test('inserts an element at any position of the list', (t) => {
  const list = new CircularLinkedList()

  t.is(list.insert(1, 0), true)
  t.is(list.size(), 1)

  let head = list.getHead()
  let tail = list.getTail()

  if (head && tail) {
    t.is(head.next, tail)
    t.is(head, tail)
  }

  const lastHead = head

  t.is(list.insert(2, 0), true)
  t.is(list.size(), 2)

  head = list.getHead()
  tail = list.getTail()

  if (head && tail) {
    t.not(head, lastHead)
    t.is(tail.next, head)
    t.is(head.next, tail)
  }

  t.is(list.insert(3, 1), true)

  t.is(list.size(), 3)

  let element = list.getElementAt(1)
  head = list.getHead()
  tail = list.getTail()

  if (element && head && tail) {
    t.is(head.next, element)
    t.is(element.next, tail)
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
