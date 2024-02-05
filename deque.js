export default class Deque {
  /**
   * @private
   * @type {{ [key: number]: number }}
   */
  items;
  /*
   * @private
   */
  count;
  /*
   * @private
   */
  lowestCount;

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  /**
   * @param {number} element
   */
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }

  /**
   * @param {number} element
   */
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  isEmpty() {
    return this.size() === 0;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const element = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return element;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const element = this.items[this.count];
    delete this.items[this.count];
    return element;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    const result = [];

    for (let i = this.lowestCount; i < this.count; i++) {
      result.push(this.items[i]);
    }

    return result.join(',');
  }

  size() {
    return this.count - this.lowestCount;
  }
}
