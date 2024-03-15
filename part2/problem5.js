export const exponentiation = (x, n) => {
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
