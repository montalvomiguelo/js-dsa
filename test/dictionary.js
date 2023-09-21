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

test('keyValues', (t) => {
  const dictionary = new Dictionary()
  dictionary.set('foo', 1)
  dictionary.set('bar', 2)
  t.like(dictionary.keyValues(), [
    { key: 'foo', value: 1 },
    { key: 'bar', value: 2 },
  ])
})

test('keys', (t) => {
  const dictionary = new Dictionary()
  dictionary.set('foo', 1)
  dictionary.set('bar', 2)
  t.deepEqual(dictionary.keys(), ['foo', 'bar'])
})

test('values', (t) => {
  const dictionary = new Dictionary()
  dictionary.set('foo', 1)
  dictionary.set('bar', 2)
  t.deepEqual(dictionary.values(), [1, 2])
})

test('forEach', (t) => {
  let count = 0
  const dictionary = new Dictionary()
  dictionary.set('foo', 1)
  dictionary.set('bar', 2)
  const callback = () => {
    count++
    return true
  }
  dictionary.forEach(callback)
  t.is(count, 2)
})

test('size', (t) => {
  const dictionary = new Dictionary()
  dictionary.set('foo', 1)
  dictionary.set('bar', 2)
  t.is(dictionary.size(), 2)
})

test('isEmpty', (t) => {
  const dictionary = new Dictionary()
  t.is(dictionary.isEmpty(), true)
  dictionary.set('foo', 1)
  dictionary.set('bar', 2)
  t.is(dictionary.isEmpty(), false)
})
