const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  if (arr.length > 0) {
    let phrase = `Семья состоит из: `;
    arr.forEach((el) => (phrase += `${el} `));
    return phrase;
  }

  return `Семья пуста`;
}
console.log(showFamily(family));
console.log(showFamily([]));


//-----------------------

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  arr.forEach(el => console.log(el.toLowerCase()));
}

standardizeStrings(favoriteCities);
