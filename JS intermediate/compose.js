const mylt20 = price => price * 20;
const divide100 = price => price / 100;
const normalizePrice = price => price.toFixed(2);
const addPrefix = price => `$ ${price}`;

const compose = (...fns) => x => fns.reduce((res, fn) => fn(res), x);

const newPrice = compose(mylt20, divide100, normalizePrice, addPrefix);

console.log(newPrice(854));

// ----------------------------------------------------
