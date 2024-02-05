import test from 'ava';
import LinkedList from '../linked-list.js';

test('adds a new element to the end of the list', (t) => {
  const list = new LinkedList();

  t.is(list.size(), 0);

  list.push(1);
  list.push(2);

  t.is(list.size(), 2);
});

test('returns the index of the element in the list', (t) => {
  const list = new LinkedList();

  list.push(1);
  list.push(2);

  t.is(list.indexOf(2), 1);
  t.is(list.indexOf(3), -1);
});

test('returns an element given its position', (t) => {
  const list = new LinkedList();

  list.push(1);
  list.push(2);
  list.push(3);

  t.not(list.getElementAt(1), undefined);
  t.is(list.getElementAt(4), undefined);
});

test('removes an element from the list given its position', (t) => {
  const list = new LinkedList();

  list.push(1);
  list.push(2);
  list.push(3);

  t.not(list.removeAt(1), undefined);
  t.is(list.size(), 2);

  t.not(list.removeAt(1), undefined);
  t.is(list.size(), 1);

  t.not(list.removeAt(0), undefined);
  t.is(list.size(), 0);

  t.is(list.removeAt(0), undefined);
  t.is(list.size(), 0);
});

test('inserts an element at any position', (t) => {
  const list = new LinkedList();

  list.push(1);
  list.push(2);
  list.push(3);

  t.is(list.insert(10, 0), true);
  t.is(list.size(), 4);

  t.is(list.insert(11, 1), true);
  t.is(list.size(), 5);

  t.is(list.insert(12, 10), false);
});

test('checks if the linked list is empty', (t) => {
  const list = new LinkedList();
  t.is(list.isEmpty(), true);

  list.push(1);
  t.is(list.isEmpty(), false);
});

test('prints the content of the list ', (t) => {
  const list = new LinkedList();

  list.push(1);
  list.push(2);
  list.push(3);

  t.is(list.toString(), '1,2,3');
});
