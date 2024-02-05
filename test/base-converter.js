import test from 'ava';
import baseConverter from '../base-converter.js';

test('baseConverter', (t) => {
  t.is(baseConverter(100345, 2), '11000011111111001');
  t.is(baseConverter(100345, 8), '303771');
  t.is(baseConverter(100345, 16), '187F9');
  t.is(baseConverter(100345, 35), '2BW0');
  t.is(baseConverter(100345, 36), '25FC');
  t.is(baseConverter(100345, 37), '');
  t.is(baseConverter(100345, 1), '');
});
