function fullPrima(nilai) {
  let convert = nilai.toString();
  for (let i = 0; i < nilai.toString().length; i++) {
    for (let j = 2; j < convert[i]; j++) {
      if (convert[i] == 0 || convert[i] % j == 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(fullPrima(2));
console.log(fullPrima(3));
console.log(fullPrima(23));
console.log(fullPrima(29));
console.log(fullPrima(24));
console.log(fullPrima(22));
