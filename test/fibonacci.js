import test from 'ava';
import { iterative, recursive } from '../fibonacci.js';

test('iterative', (t) => {
  t.is(iterative(-1), 0);
  t.is(iterative(0), 0);
  t.is(iterative(1), 1);
  t.is(iterative(2), 1);
  t.is(iterative(3), 2);
  t.is(iterative(4), 3);
});

test('recursive', (t) => {
  t.is(recursive(-1), 0);
  t.is(recursive(0), 0);
  t.is(recursive(1), 1);
  t.is(recursive(2), 1);
  t.is(recursive(3), 2);
  t.is(recursive(4), 3);
});
