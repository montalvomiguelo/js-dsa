import test from 'ava'
import decimalToBinary from '../decimal-to-binary.js'

test('converts decimal to binary', (t) => {
  t.is(decimalToBinary(2), '10')
  t.is(decimalToBinary(3), '11')
  t.is(decimalToBinary(4), '100')
  t.is(decimalToBinary(5), '101')
  t.is(decimalToBinary(6), '110')
  t.is(decimalToBinary(7), '111')
  t.is(decimalToBinary(8), '1000')
  t.is(decimalToBinary(9), '1001')
  t.is(decimalToBinary(10), '1010')
  t.is(decimalToBinary(233), '11101001')
})
