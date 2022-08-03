function closures() {
  let counter = 0;

  function incr(n) {
    return counter += n;
  }

  function decr(n) {
    return counter -= n;
  }

  function zero() {
    return counter = 0;
  }

  return {
    incr,
    decr,
    zero
  }
}

let number1 = closures();

console.log(number1.incr(4))
console.log(number1.decr(1))
console.log(number1.zero())
