import Stack from './stack.js'

/**
 * @param {number} decimal
 * @param {number} base
 * @returns {string}
 */
export default function baseConverter(decimal, base) {
  let number = decimal
  let remainder
  let result = ''
  const digits = '0123456789ABDCEFGHIJKLMNOPQRSTUVWXYZ'
  const stack = new Stack()

  if (base < 2 || base > 36) {
    return ''
  }

  while (number > 0) {
    remainder = Math.floor(number % base)
    stack.push(remainder)
    number = Math.floor(number / base)
  }

  while (!stack.isEmpty()) {
    const element = stack.pop()
    if (element !== undefined) {
      result += digits[element]
    }
  }

  return result
}
