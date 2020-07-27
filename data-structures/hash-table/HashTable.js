class HashTable {
  constructor(size = 137) {
    this.buckets = new Array(size);
  }

  // @desc:     Hash function
  // @params:   Key
  // @cmplx:    O(1)
  _hash(key) {
    let index = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < key.length; i++) {
      let value = key[i].charCodeAt(0) - 96;
      index = (index + WEIRD_PRIME + value) % this.buckets.length;
    }
    return index;
  }

  // @desc:     Set a key-value pair
  // @params:   Key and value
  // @cmplx:    O(1)
  set(key, value) {
    const index = this._hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    this.buckets[index].push([key, value]);
  }

  // @desc:     Get the value for a given key
  // @params:   Key
  // @cmplx:    O(1)
  get(key) {
    const index = this._hash(key);
    if (this.buckets[index]) {
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i][0] === key) {
          return this.buckets[index][i][1];
        }
      }
    }
    return undefined;
  }

  // @desc:     Get all keys in hash table
  // @cmplx:    O(n)
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          if (!keysArray.includes(this.buckets[i][j][0])) {
            keysArray.push(this.buckets[i][j][0]);
          }
        }
      }
    }
    return keysArray;
  }

  // @desc:     Get all values in hash table
  // @cmplx:    O(n)
  values() {
    const valuesArray = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          if (!valuesArray.includes(this.buckets[i][j][1])) {
            valuesArray.push(this.buckets[i][j][1]);
          }
        }
      }
    }
    return valuesArray;
  }
}
