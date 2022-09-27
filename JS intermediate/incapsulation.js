'use strict';

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #surname = 'NEBYLYTSIA';

  get surname() {
    console.log(`${this.#surname}`);
  }

  set surname(sn) {
    this.#surname = sn;
  }

  say() {
    console.log(`Name: ${this.name} ${this.#surname} and age: ${this._age}`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 100) {
      this._age = age;
    } else {
      console.log('Error');
    }
  }
}

const kirill = new User('Kirill', 30);
console.log(kirill.name);
kirill.age = 99;
kirill.say();
kirill.surname;
kirill.surname('LEVENETS');
kirill.surname;
