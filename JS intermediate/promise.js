'use strict';

console.log('Demande...');

const req = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Prepare...');

    const product = {
      name: 'TV',
      price: 2000,
    };

    resolve(product);
  }, 2000);
});

req.then(product => {
  setTimeout(() => {
    product.status = 'Commander';
    console.log(product);
  }, 2000);
});

req.then(product => {
  const req2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
      product.status = 'Command';
      resolve(product);
    }, 2000);
  });

  req2.then(data => {
    console.log(data);
  });
});
