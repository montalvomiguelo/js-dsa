import test from 'ava'
import DoublyLinkedList from '../doubly-linked-list.js'

test('inserts an element at any position of the list', (t) => {
  const list = new DoublyLinkedList()
  /** @type {import('../doubly-node.js').DoublyNode | null} */
  let head
  /** @type {import('../doubly-node.js').DoublyNode | null} */
  let tail

  t.is(list.insert(1, 0), true)
  t.not(list.getHead(), null)
  t.not(list.getTail(), null)

  list.insert(2, 0)

  head = list.getHead()
  if (head) {
    t.is(head.value, 2)
    if (head.next) t.is(head.next.value, 1)
    t.is(head.prev, null)
  }

  tail = list.getTail()
  if (tail) {
    t.is(tail.value, 1)
    if (tail.prev) t.is(tail.prev.value, 2)
    t.is(tail.next, null)
  }

  list.insert(3, 1)

  head = list.getHead()
  if (head) {
    t.is(head.value, 2)
    if (head.next) t.is(head.next.value, 3)
    t.is(head.prev, null)
  }

  tail = list.getTail()
  if (tail) {
    t.is(tail.value, 1)
    if (tail.prev) t.is(tail.prev.value, 3)
    t.is(tail.next, null)
  }
})

test('returns false when inserting an element at an invalid index', (t) => {
  const list = new DoublyLinkedList()

  t.is(list.insert(1, 1), false)
})
