'use strict';
//1
// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }

//   console.log(sum());
// }

// showThis(4, 5);



//2
// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     console.log(this);
//   }
// }

// obj.sum();

// function sayName() {
//   console.log(this);
//   console.log(this.name);
// }

// const user = {
//   name: 'Kirill',
// };

// sayName.call(user);
// sayName.apply(user);

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);

// console.log(double(2));
// console.log(double(20));

// 1. without use strict: this = window, with use strict this = undefined;
// 2. this in object = object
// 3. this in constructor and Class = new exemplar of object
// 4. manual binding this: call, apply, bind

