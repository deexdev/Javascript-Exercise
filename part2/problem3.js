export const bilanganPrima = (nilai) => {
  for (let i = 2; i < nilai; i++) {
    if (nilai == 0 || nilai % i == 0) {
      return false;
    }
  }

  return true;
}
