function amountOfPages(summary){
  let string = '';
  let count = 0;

  for (let i = 1; i <= summary; i++) {
    string += i;
    count = i;
    if (string.length == summary) break;
  }


  return count;
}

console.log(amountOfPages(5)); //5
console.log(amountOfPages(25)); //17
console.log(amountOfPages(1095)); //401
console.log(amountOfPages(185)); //97
