'use strict';

// const now = new Date('2022-08-14');
// new Date.parse('2022-08-14');89o9o

//getter
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getDay());
// console.log(now.getTime());
//...


//setter
// now.setHours(18, 30, 45, 500);
// console.log(now);


let start = new Date();

for (let i = 0; i < 50000000; i++) {
  let some = i ** 3;
}

let end = new Date();

console.log(end - start);
