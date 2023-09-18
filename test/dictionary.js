import test from 'ava'
import Dictionary from '../dictionary.js'

test('set', (t) => {
  const dictionary = new Dictionary()
  t.is(dictionary.set('foo', 1), true)
  t.is(dictionary.set(null, 2), false)
})

test('hasKey', (t) => {
  const dictionary = new Dictionary()
  dictionary.set('foo', 1)
  t.is(dictionary.hasKey('foo'), true)
  t.is(dictionary.hasKey('bar'), false)
})

test('remove', (t) => {
  const dictionary = new Dictionary()
  dictionary.set('foo', 1)
  t.is(dictionary.remove('foo'), true)
  t.is(dictionary.remove('bar'), false)
})

test('get', (t) => {
  const dictionary = new Dictionary()
  dictionary.set('foo', 1)
  t.is(dictionary.get('foo'), 1)
  t.is(dictionary.get('bar'), undefined)
})
