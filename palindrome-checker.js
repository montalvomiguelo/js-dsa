import Deque from './deque.js'

/**
 * @param {string} string
 */
export default function palindromeChecker(string) {
  if (!string) {
    return false
  }

  const deque = new Deque()
  const lowerString = string.toLowerCase().split(' ').join('')

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString[i].charCodeAt(0))
  }

  let isEqual = true
  let firstChar, lastChar

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    if (firstChar !== lastChar) {
      isEqual = false
    }
  }

  return isEqual
}
