const bilanganPrima = (nilai) => {
  for (let i = 2; i < nilai; i++) {
    if (nilai == 0 || nilai % i == 0) {
      return false;
    }
  }

  return true;
};

console.log(bilanganPrima(11));
console.log(bilanganPrima(13));
console.log(bilanganPrima(17));
console.log(bilanganPrima(20));
console.log(bilanganPrima(35));
console.log(bilanganPrima(2));
console.log(bilanganPrima(1));
