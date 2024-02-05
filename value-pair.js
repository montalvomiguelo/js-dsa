/**
 * @template T,U
 */
export default class ValuePair {
  /**
   * @param {T} key
   * @param {U} value
   */
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[${this.key}: ${this.value}]`;
  }
}
