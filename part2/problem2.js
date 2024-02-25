function faktorBilangan(nilai) {
  let i = 1;
  while (i <= nilai) {
    if (nilai % i == 0) {
      console.log(i);
    }
    i++;
  }
  return "===";
}

console.log(faktorBilangan(6));
console.log(faktorBilangan(20));
