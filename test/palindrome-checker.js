import test from 'ava'
import palindromeChecker from '../palindrome-checker.js'

test('returns true for a palindrome', (t) => {
  t.is(palindromeChecker('cat tac'), true)
  t.is(palindromeChecker('Was it a car or a cat I saw'), true)
})

test('returns false for a non-palindrome', (t) => {
  t.is(palindromeChecker('cat rat'), false)
  t.is(palindromeChecker('toronto'), false)
})
