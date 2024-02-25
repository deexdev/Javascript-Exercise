function exponentiation(x, n) {
  let result = x;

  if (n == 0) {
    return 1;
  } else if (n < 0) {
    return "invalid input";
  } else {
    for (let i = 0; i < n - 1; i++) {
      result = result * x;
    }
  }

  return result;
}

console.log(exponentiation(2, 3));
console.log(exponentiation(2, 12));
console.log(exponentiation(7, 2));
console.log(exponentiation(9, 3));
console.log(exponentiation(22, 5));
console.log(exponentiation(1999, 0));
console.log(exponentiation(2, -3));
