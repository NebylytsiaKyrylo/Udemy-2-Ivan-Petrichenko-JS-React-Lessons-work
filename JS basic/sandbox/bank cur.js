const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
if (arr.length === 0) return 'No currencies available';

let res = 'Currencies available:\n';

arr.forEach(el => el != missingCurr ? res += `${el}\n` : res);

return res;
}

console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'));
