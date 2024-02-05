import test from 'ava';
import CircularLinkedList from '../circular-linked-list.js';

test('inserts an element at any position of the list', (t) => {
  const list = new CircularLinkedList();

  t.is(list.insert(1, 0), true);
  t.is(list.size(), 1);

  let head = list.getHead();
  let tail = list.getTail();

  if (head && tail) {
    t.is(head.next, tail);
    t.is(head, tail);
  }

  const lastHead = head;

  t.is(list.insert(2, 0), true);
  t.is(list.size(), 2);

  head = list.getHead();
  tail = list.getTail();

  if (head && tail) {
    t.not(head, lastHead);
    t.is(tail.next, head);
    t.is(head.next, tail);
  }

  t.is(list.insert(3, 1), true);

  t.is(list.size(), 3);

  let element = list.getElementAt(1);
  head = list.getHead();
  tail = list.getTail();

  if (element && head && tail) {
    t.is(head.next, element);
    t.is(element.next, tail);
  }
});

test('removes an invalid element from the list', (t) => {
  const list = new CircularLinkedList();

  t.is(list.removeAt(0), undefined);
});

test('removes an element from the beginning of the list', (t) => {
  const list = new CircularLinkedList();

  list.insert(1, 0);
  list.insert(2, 0);
  list.insert(3, 0);

  const removed = list.removeAt(0);
  const head = list.getHead();
  const tail = list.getTail();

  t.is(list.size(), 2);
  t.not(removed, null);

  if (head && tail) {
    t.is(head.next, tail);
    t.is(tail.next, head);
  }
});

test('removes an element from the middle of the list', (t) => {
  const list = new CircularLinkedList();

  list.insert(1, 0);
  list.insert(2, 0);
  list.insert(3, 0);

  const removed = list.removeAt(1);
  const head = list.getHead();
  const tail = list.getTail();

  t.is(list.size(), 2);
  t.not(removed, null);

  if (head && removed && tail) {
    t.is(removed.next, null);
    t.is(head.next, tail);
    t.is(tail.next, head);
  }
});

test('removes an element from the end of the list', (t) => {
  const list = new CircularLinkedList();

  list.insert(1, 0);
  list.insert(2, 0);

  const removed = list.removeAt(1);

  t.is(list.size(), 1);
  t.not(removed, null);

  const head = list.getHead();
  const tail = list.getTail();

  t.is(head, tail);
  t.is(tail, head);
});
