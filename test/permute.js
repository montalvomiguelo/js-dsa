import test from 'ava';
import permute from '../permute.js';

test('case #1', (t) => {
  const perms = permute([1, 2, 3]);
  t.is(perms.length, 6);
  t.like(perms, [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 2, 1],
    [3, 1, 2],
  ]);
});

test('case #2', (t) => {
  const perms = permute([0, 1]);
  t.is(perms.length, 2);
  t.like(perms, [
    [0, 1],
    [1, 0],
  ]);
});

test('case #3', (t) => {
  const perms = permute([1]);
  t.is(perms.length, 1);
  t.like(perms, [[1]]);
});
