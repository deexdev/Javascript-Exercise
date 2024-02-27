function caesar(offset, input) {
  let letterString = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < input.length; i++) {
    let count = letterString.indexOf(input[i]) + offset + 1;
    if (count > 26) {
      result += letterString[count % 26 - 1];
    } else {
      result += letterString[count-1];
    }
  }

  return result;
}

console.log(caesar(2, "z"));
console.log(caesar(3, "abc"));
console.log(caesar(2, "alta"));
console.log(caesar(10, "alterraacademy"));
console.log(caesar(1, "abcdefghijklmnopqrstuvwxyz"));
console.log(caesar(1000, "abcdefghijklmnopqrstuvwxyz"));
