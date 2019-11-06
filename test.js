'use strict';
const chai = require('chai');
chai.should();
let HashTable = require('./index');
describe('Hash Table', () => {
  describe('Instantiation', () => {
    let hashTable = new HashTable();
    it('hashTable should be object', () => {
      (typeof hashTable === 'object').should.be.equals(true);
    });
    it('hashTable should be instance of Hash', () => {
      (hashTable instanceof HashTable).should.be.equals(true);
    });
  });
});
