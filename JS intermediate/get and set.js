'use strict';

const personne = {
  name: 'Alex',
  age: 25,

  get userAge() {
    return this.age;
  },

  set userAge(num) {
    this.age = num;
  }
};

console.log(personne.userAge = 30);
console.log(personne.userAge);
