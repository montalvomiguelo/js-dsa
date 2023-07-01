import Stack from './stack.js'

/**
 * @param {number} decimal
 * @returns {string}
 */
export default function decimalToBinary(decimal) {
  let number = decimal
  let remainder
  let result = ''
  const stack = new Stack()

  while (number > 0) {
    remainder = Math.floor(number % 2)
    stack.push(remainder)
    number = Math.floor(number / 2)
  }

  while (!stack.isEmpty()) {
    const element = stack.pop()
    if (element !== undefined) {
      result += element.toString()
    }
  }

  return result
}
