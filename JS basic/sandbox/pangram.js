function isPangram(string) {
  return new Set(string.toLowerCase().match(/\w/g)).size == 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('Hello world'));
