//Menggunakan time complexity O(1) = constant
function bilanganPrima(nilai) {
  if (nilai <= 1) {
    return false;
  } else if (nilai == 3 || nilai == 5 || nilai == 7) {
    return true;
  } else {
    if (nilai % 3 == 0 || nilai % 5 == 0 || nilai % 7 == 0) {
      return false;
    } else {
      return true;
    }
  }
}

//menggunakan time complexity O(sqrt(n)) = sublinear
function bilanganPrima(nilai) {
  if (nilai <= 1) {
    return false;
  }

  const batas = Math.sqrt(nilai);
  for (let i = 2; i <= batas; i++) {
    if (nilai % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(bilanganPrima(1000000007));
console.log(bilanganPrima(1500450271));
console.log(bilanganPrima(1000000000));
