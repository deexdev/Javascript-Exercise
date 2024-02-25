function faktorBilanganRev(nilai) {
  let i = nilai;
  while (i >= 0) {
    if (nilai % i == 0) {
      console.log(i);
    }
    i--
  }

  return "===";
}

console.log(faktorBilanganRev(6));
console.log(faktorBilanganRev(20));
