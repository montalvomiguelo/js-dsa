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
