export const fullPrima = (nilai) => {
  let convert = nilai.toString();
  for (let i = 0; i < nilai.toString().length; i++) {
    for (let j = 2; j < convert[i]; j++) {
      if (convert[i] == 0 || convert[i] % j == 0) {
        return false;
      }
    }
  }
  return true;
};
