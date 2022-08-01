const someString = 'This is some strange string';

function reverse(str) {
  if (typeof str !== 'string') return 'Error!';
  str = str.split('').reverse().join('');
  return str;
}

console.log(reverse(someString)); //'gnirts egnarts emos si sihT'
console.log(reverse(12345)); //'Error!'
