/**
 * @template T
 * @param {T} item
 */
export function defaultToString(item) {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}

/**
 * @param {number} a
 * @param {number} b
 */
export function defaultCompareFn(a, b) {
  if (a === b) {
    return 0
  }

  if (a < b) {
    return -1
  }

  return 1
}

/**
 * @template T
 * @param {T[]} array
 * @param {number} i
 * @param {number} j
 */
export function swap(array, i, j) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
