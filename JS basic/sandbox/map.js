const shops = [{ oil: 500, beer: 300 }, { milk: 100, water: 50 }, { sig: 150 }];
const budgets = new Map();

shops.forEach(v => budgets.set(v, 300));

// console.log(shops);
// console.log(budgets);
// console.log(budgets.get(shops[0]));
// console.log(budgets.has(shops[0]));

const obj = {
  name: 'Kir',
  age: 30,
  145: 'cars',
  ['hello']: 100,
};

const newMap = new Map(Object.entries(obj));

console.log(newMap);

const newObj = Object.fromEntries(newMap);

console.log(newObj);
