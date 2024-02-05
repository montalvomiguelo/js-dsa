import test from 'ava';
import DoublyLinkedList from '../doubly-linked-list.js';

/** @typedef {import('../doubly-node').DoublyNode<number>} DoublyNode */

test('inserts an element at any position of the list', (t) => {
  const list = new DoublyLinkedList();
  /** @type {DoublyNode | null} */
  let head;
  /** @type {DoublyNode | null} */
  let tail;

  t.is(list.insert(1, 0), true);
  t.not(list.getHead(), null);
  t.not(list.getTail(), null);

  list.insert(2, 0);

  head = list.getHead();
  if (head) {
    t.is(head.value, 2);
    if (head.next) t.is(head.next.value, 1);
    t.is(head.prev, null);
  }

  tail = list.getTail();
  if (tail) {
    t.is(tail.value, 1);
    if (tail.prev) t.is(tail.prev.value, 2);
    t.is(tail.next, null);
  }

  list.insert(3, 1);

  head = list.getHead();
  if (head) {
    t.is(head.value, 2);
    if (head.next) t.is(head.next.value, 3);
    t.is(head.prev, null);
  }

  tail = list.getTail();
  if (tail) {
    t.is(tail.value, 1);
    if (tail.prev) t.is(tail.prev.value, 3);
    t.is(tail.next, null);
  }

  list.insert(4, 3);

  head = list.getHead();
  if (head) {
    t.is(head.value, 2);
  }

  tail = list.getTail();
  if (tail) {
    t.is(tail.value, 4);
    if (tail.prev) t.is(tail.prev.value, 1);
  }
});

test('returns false when inserting an element at an invalid index', (t) => {
  const list = new DoublyLinkedList();

  t.is(list.insert(1, 1), false);
});

test('removes an element from the beginning of the list', (t) => {
  const list = new DoublyLinkedList();

  list.insert(1, 0);
  list.insert(2, 1);
  list.insert(3, 2);
  list.insert(4, 3);

  const node = list.removeAt(0);

  t.not(node, undefined);
  t.is(list.size(), 3);

  const head = list.getHead();
  if (head) {
    t.is(head.prev, null);
    t.is(head.value, 2);
  }
  if (node) {
    t.is(node.next, null);
  }
});

test('removes an element from the middle of the list', (t) => {
  const list = new DoublyLinkedList();

  list.insert(1, 0);
  list.insert(2, 1);
  list.insert(3, 2);
  list.insert(4, 3);

  const node = list.removeAt(1);

  t.is(list.size(), 3);
  t.not(node, null);

  if (node) {
    t.is(node.prev, null);
    t.is(node.next, null);
  }
});

test('removes an element from the end of the list', (t) => {
  const list = new DoublyLinkedList();

  list.insert(1, 0);
  list.insert(2, 1);

  let node = list.removeAt(1);
  const head = list.getHead();

  t.is(list.size(), 1);
  t.not(node, null);
  if (head) {
    t.not(head, node);
    t.is(head.next, null);
  }

  node = list.removeAt(0);
});

test('removes the only element from the list', (t) => {
  const list = new DoublyLinkedList();

  list.insert(1, 0);

  let node = list.removeAt(0);
  const head = list.getHead();
  const tail = list.getTail();

  t.is(list.size(), 0);
  t.not(node, null);
  t.is(head, null);
  t.is(tail, null);
});

test('removes an invalid element from the list', (t) => {
  const list = new DoublyLinkedList();

  t.is(list.removeAt(0), undefined);
});
