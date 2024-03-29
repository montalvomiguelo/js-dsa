import test from 'ava';
import SortedLinkedList from '../sorted-linked-list.js';

test('inserts elements in order', (t) => {
  const list = new SortedLinkedList();

  list.insert(1);
  list.insert(3);
  list.insert(2);

  t.is(list.size(), 3);

  t.is(list.toString(), '1,2,3');
});

test('inserts elements in descending order', (t) => {
  const list = new SortedLinkedList((a, b) => b - a);

  list.insert(1);
  list.insert(3);
  list.insert(2);

  t.is(list.size(), 3);

  t.is(list.toString(), '3,2,1');
});
