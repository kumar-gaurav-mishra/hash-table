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
    it('hashTable should be instance of Hash Table', () => {
      (hashTable instanceof HashTable).should.be.equals(true);
    });
  });
  describe('Set Method', () => {
    it('hashTable keyMah should have the length of 10', () => {
      let hashTable = new HashTable(10);
      hashTable.keyMap.length.should.be.equals(10);
    });
    it('hashTable should have value kumar at the index of 3', () => {
      let hashTable = new HashTable(10);
      let hash = hashTable._hash('name');
      hashTable.set('name', 'kumar');
      hashTable.keyMap[hash][0][0].should.be.equals('name');
      hashTable.keyMap[hash][0][1].should.be.equals('kumar');
    });
    it('hashTable should have value Jyoti at the index of 3 after setting it for the first time as "kumar"', () => {
      let hashTable = new HashTable(10);
      let hash = hashTable._hash('name');
      hashTable.set('name', 'kumar');
      hashTable.set('name', 'Jyoti');
      hashTable.keyMap[hash][0][0].should.be.equals('name');
      hashTable.keyMap[hash][0][1].should.be.equals('Jyoti');
    });
    it('hashTable set method should return undefined in case of missing key or value', () => {
      let hashTable = new HashTable(10);
      (hashTable.set() === undefined).should.be.equals(true);
    });
  });
  describe('Get Method', () => {
    it('hashTable get method should return kumar', () => {
      let hashTable = new HashTable(10);
      hashTable.set('name', 'kumar');
      hashTable.get('name').should.be.equals('kumar');
    });
    it('hashTable get method should return undefined if the size of Hash Table is 0', () => {
      let hashTable = new HashTable(1);
      (hashTable.get('name') === undefined).should.be.equals(true);
    });
    it('hashTable get method should return undefined if the element required is not found in Hash Table', () => {
      let hashTable = new HashTable(10);
      hashTable.set('name', 'kumar');
      (hashTable.get('age') === undefined).should.be.equals(true);
    });
  });
  describe('Keys Method', () => {
    let hashTable = new HashTable(10);
    hashTable.set('name', 'kumar');
    hashTable.set('age', 10);
    hashTable.set('Qualification', 'graduate');
    it('hashTable keys method should return all the keys of the hashtable', () => {
      (hashTable.keys().length === 3).should.be.equals(true);
      (hashTable.keys()[0] === 'name').should.be.equals(true);
      (hashTable.keys()[1] === 'age').should.be.equals(true);
      (hashTable.keys()[2] === 'Qualification').should.be.equals(true);
    });
  });
  describe('Values Method', () => {
    let hashTable = new HashTable(10);
    hashTable.set('name', 'jyoti');
    hashTable.set('name', 'kumar');
    hashTable.set('age', 10);
    hashTable.set('Qualification', 'graduate');
    it('hashTable values method should return all the values of the hashtable', () => {
      (hashTable.values().length === 3).should.be.equals(true);
      (hashTable.values()[0] === 'kumar').should.be.equals(true);
      (hashTable.values()[1] === 10).should.be.equals(true);
      (hashTable.values()[2] === 'graduate').should.be.equals(true);
    });
  });
});
