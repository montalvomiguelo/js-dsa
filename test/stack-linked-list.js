import test from 'ava';
import StackLinkedList from '../stack-linked-list.js';

test('pushes elements', (t) => {
  const stack = new StackLinkedList();

  t.is(stack.size(), 0);

  stack.push(1);
  stack.push(2);
  stack.push(3);

  t.is(stack.size(), 3);
});

test('returns the top element', (t) => {
  const stack = new StackLinkedList();

  stack.push(1);
  stack.push(3);
  stack.push(2);

  const node = stack.peek();

  if (node) {
    t.is(node.value, 2);
  }
});

test('removes the top element', (t) => {
  const stack = new StackLinkedList();

  stack.push(1);
  stack.push(2);
  stack.push(3);

  const node = stack.pop();

  if (node) {
    t.is(node.prev, null);
    t.is(stack.size(), 2);
    const tail = stack.peek();
    if (tail) {
      t.is(tail.next, null);
    }
  }
});

test('prints the content of the stack', (t) => {
  const stack = new StackLinkedList();

  stack.push(1);
  stack.push(2);
  stack.push(3);

  t.is(stack.toString(), '1,2,3');
});

test('clears the stack', (t) => {
  const stack = new StackLinkedList();

  stack.push(1);
  stack.push(2);
  stack.push(3);

  stack.clear();

  t.is(stack.size(), 0);
  t.is(stack.peek(), undefined);
});
