'use strict';
class HashTable {
  #valueArray = [];
  #keyArray = [];
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  set(key, value) {
    if (!key || !value) return undefined;
    let hash = this._hash(key);
    if (this.#keyArray.indexOf(key) < 0) {
      this.#keyArray.push(key);
    }
    if (!this.keyMap[hash]) {
      this.keyMap[hash] = [];
      this.keyMap[hash].push([key, value]);
      if (this.#valueArray.indexOf(value) < 0) {
        this.#valueArray.push(value);
      }
    } else {
      let hashArr = this.keyMap[hash];
      for (let i = 0; i < hashArr.length; i++) {
        if (hashArr[i][0] === key) {
          let valueIndex = this.#valueArray.indexOf(hashArr[i][1]);
          if (valueIndex > -1) this.#valueArray[valueIndex] = value;
          hashArr[i][1] = value;
          this.keyMap[hash] = hashArr;
          return this;
        }
      }
      this.keyMap[hash].push([key, value]);
      if (this.#valueArray.indexOf(value) < 0) {
        this.#valueArray.push(value);
      }
    }
    return this;
  }
  get(key) {
    let hash = this._hash(key);
    if (this.keyMap.length < hash || !this.keyMap[hash]) return undefined;
    let hashArr = this.keyMap[hash];
    for (let i = 0; i < hashArr.length; i++) {
      if (hashArr[i][0] === key) return hashArr[i][1];
    }
    return undefined;
  }
  keys() {
    return this.#keyArray;
  }
  values() {
    return this.#valueArray;
  }
  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }
}
module.exports = HashTable;
