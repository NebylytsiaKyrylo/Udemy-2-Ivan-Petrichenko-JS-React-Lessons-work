function factorial(n) {
  if (!Number.isInteger(n) || typeof n != 'number') return 'Sorry';
  if (n < 0) return 1;

  return n ? n * factorial(n - 1) : 1;
}

console.log(factorial('3.54'));
console.log(factorial('Kirill'));
console.log(factorial(-10));
console.log(factorial(5));
