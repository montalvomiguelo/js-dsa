/**
 * @param {number} n
 */
export function iterative(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  let fibNMinus2 = 0;
  let fibMinus1 = 1;
  let fibN = n;
  for (let i = 2; i <= n; i++) {
    fibN = fibMinus1 + fibNMinus2;
    fibNMinus2 = fibMinus1;
    fibMinus1 = fibN;
  }
  return fibN;
}

/**
 * @param {number} n
 * @returns {number}
 */
export function recursive(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  return recursive(n - 1) + recursive(n - 2);
}
