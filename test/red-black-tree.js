import test from 'ava';
import RedBlackTree from '../red-black-tree.js';

test('inserts elements in the RedBlackTree', (t) => {
  const tree = new RedBlackTree();

  tree.insert(8);
  t.is(tree?.root?.isRed(), false);
  t.is(tree?.root?.key, 8);

  tree.insert(18);
  t.is(tree?.root?.isRed(), false);
  t.is(tree?.root?.key, 8);
  t.is(tree?.root?.right?.isRed(), true);
  t.is(tree?.root?.right?.key, 18);

  tree.insert(5);
  t.is(tree?.root?.isRed(), false);
  t.is(tree?.root?.key, 8);
  t.is(tree?.root?.right?.isRed(), true);
  t.is(tree?.root?.right?.key, 18);
  t.is(tree?.root?.left?.isRed(), true);
  t.is(tree?.root?.left?.key, 5);

  tree.insert(15);
  t.is(tree?.root?.isRed(), false);
  t.is(tree?.root?.key, 8);
  t.is(tree?.root?.right?.isRed(), false);
  t.is(tree?.root?.right?.key, 18);
  t.is(tree?.root?.left?.isRed(), false);
  t.is(tree?.root?.left?.key, 5);
  t.is(tree?.root?.right?.left?.isRed(), true);
  t.is(tree?.root?.right?.left?.key, 15);

  tree.insert(17);
  t.is(tree?.root?.isRed(), false);
  t.is(tree?.root?.key, 8);
  t.is(tree?.root?.right?.isRed(), false);
  t.is(tree?.root?.right?.key, 17);
  t.is(tree?.root?.left?.isRed(), false);
  t.is(tree?.root?.left?.key, 5);
  t.is(tree?.root?.right?.left?.isRed(), true);
  t.is(tree?.root?.right?.left?.key, 15);
  t.is(tree?.root?.right?.right?.isRed(), true);
  t.is(tree?.root?.right?.right?.key, 18);

  tree.insert(25);
  t.is(tree?.root?.isRed(), false);
  t.is(tree?.root?.key, 8);
  t.is(tree?.root?.right?.isRed(), true);
  t.is(tree?.root?.right?.key, 17);
  t.is(tree?.root?.left?.isRed(), false);
  t.is(tree?.root?.left?.key, 5);
  t.is(tree?.root?.right?.left?.isRed(), false);
  t.is(tree?.root?.right?.left?.key, 15);
  t.is(tree?.root?.right?.right?.isRed(), false);
  t.is(tree?.root?.right?.right?.key, 18);
  t.is(tree?.root?.right?.right?.right?.isRed(), true);
  t.is(tree?.root?.right?.right?.right?.key, 25);

  tree.insert(40);
  t.is(tree?.root?.isRed(), false);
  t.is(tree?.root?.key, 8);
  t.is(tree?.root?.right?.isRed(), true);
  t.is(tree?.root?.right?.key, 17);
  t.is(tree?.root?.left?.isRed(), false);
  t.is(tree?.root?.left?.key, 5);
  t.is(tree?.root?.right?.left?.isRed(), false);
  t.is(tree?.root?.right?.left?.key, 15);
  t.is(tree?.root?.right?.right?.isRed(), false);
  t.is(tree?.root?.right?.right?.key, 25);
  t.is(tree?.root?.right?.right?.right?.isRed(), true);
  t.is(tree?.root?.right?.right?.right?.key, 40);
  t.is(tree?.root?.right?.right?.left?.isRed(), true);
  t.is(tree?.root?.right?.right?.left?.key, 18);

  tree.insert(80);
  t.is(tree?.root?.isRed(), false);
  t.is(tree?.root?.key, 17);
  t.is(tree?.root?.right?.isRed(), true);
  t.is(tree?.root?.right?.key, 25);
  t.is(tree?.root?.left?.isRed(), true);
  t.is(tree?.root?.left?.key, 8);
  t.is(tree?.root?.right?.left?.isRed(), false);
  t.is(tree?.root?.right?.left?.key, 18);
  t.is(tree?.root?.right?.right?.isRed(), false);
  t.is(tree?.root?.right?.right?.key, 40);
  t.is(tree?.root?.left?.left?.isRed(), false);
  t.is(tree?.root?.left?.left?.key, 5);
  t.is(tree?.root?.left?.right?.isRed(), false);
  t.is(tree?.root?.left?.right?.key, 15);
  t.is(tree?.root?.right?.right?.right?.isRed(), true);
  t.is(tree?.root?.right?.right?.right?.key, 80);
});
