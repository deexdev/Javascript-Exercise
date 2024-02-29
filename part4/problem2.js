function fastExponentiation(x, n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return "invalid input";
  } else {
    if (n % 2 === 0) {
      let halfResult = fastExponentiation(x, n / 2);
      return halfResult * halfResult;
    } else {
      return x * fastExponentiation(x, n - 1);
    }
  }
}

console.log(fastExponentiation(2, 3));
console.log(fastExponentiation(2, 12));
console.log(fastExponentiation(7, 2));
console.log(fastExponentiation(9, 3));
console.log(fastExponentiation(22, 5));
console.log(fastExponentiation(1999, 0));
console.log(fastExponentiation(2, -3));
