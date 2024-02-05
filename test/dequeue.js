import test from 'ava';
import Deque from '../deque.js';

test('adds elements in the back', (t) => {
  const deque = new Deque();

  t.is(deque.size(), 0);

  deque.addBack(1);
  deque.addBack(2);

  t.is(deque.size(), 2);
});

test('adds elements in the front', (t) => {
  const deque = new Deque();

  t.is(deque.size(), 0);

  deque.addFront(1);
  deque.addFront(2);

  t.is(deque.size(), 2);
});

test('removes elements from the back', (t) => {
  const deque = new Deque();

  deque.addBack(1);
  deque.addBack(2);

  t.is(deque.removeBack(), 2);
  t.is(deque.removeBack(), 1);
  t.is(deque.removeBack(), undefined);
});

test('removes elements from the front', (t) => {
  const deque = new Deque();

  deque.addFront(1);
  deque.addFront(2);

  t.is(deque.removeFront(), 2);
  t.is(deque.removeFront(), 1);
  t.is(deque.removeFront(), undefined);
});

test('returns the first element', (t) => {
  const deque = new Deque();

  deque.addBack(1);
  deque.addBack(2);

  t.is(deque.peekFront(), 1);
});

test('returns the last element', (t) => {
  const deque = new Deque();

  deque.addBack(1);
  deque.addBack(2);

  t.is(deque.peekBack(), 2);
});

test('returns the size of the deque', (t) => {
  const deque = new Deque();

  deque.addBack(1);
  deque.addBack(2);

  t.is(deque.size(), 2);
});

test('clears the deque', (t) => {
  const deque = new Deque();

  deque.addBack(1);
  deque.addBack(2);

  deque.clear();

  t.is(deque.size(), 0);
});

test('checks if the deque is empty', (t) => {
  const deque = new Deque();

  t.true(deque.isEmpty());

  deque.addBack(1);

  t.false(deque.isEmpty());
});

test('returns the deque as a string', (t) => {
  const deque = new Deque();

  deque.addBack(1);
  deque.addBack(2);

  t.is(deque.toString(), '1,2');
});
