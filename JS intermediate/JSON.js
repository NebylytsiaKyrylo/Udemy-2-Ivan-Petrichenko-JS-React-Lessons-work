'use strict';

const persone = {
  name: 'Kirill',
  tel: '+33786383',
  parents: {
    mom: 'Oksana',
    dad: 'Vitaliy',
  },
};

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Supermama';

console.log(persone);
console.log(clone);
