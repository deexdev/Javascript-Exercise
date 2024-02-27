function compare(a, b) {
  let checker = 0;
  let result = "";
  if (a.length > b.length) {
    for (let i = 0; i < a.length; i++) {
      if (result.length == b.length) {
        break;
      }
      if (a[i] == b[checker]) {
        if (a[i + 1] == b[checker + 1] || b[checker + 1] == undefined) {
          checker++;
          result += a[i];
        }
      } else {
        checker = 0;
        result + "";
      }
    }
  } else {
    for (let i = 0; i < b.length; i++) {
        if (result.length == a.length) {
          break;
        }
        if (b[i] == a[checker]) {
          if (b[i + 1] == a[checker + 1] || a[checker + 1] == undefined) {
            checker++;
            result += b[i];
          }
        } else {
          checker = 0;
          result + "";
        }
      }
  }

  return result;
}

console.log(compare("AKA", "AKASHI"));
console.log(compare("KANGOORO", "KANG"));
console.log(compare("KI", "KIJANG"));
console.log(compare("KUPU", "KUPU-KUPU"));
console.log(compare("ILA", "ILALANG"));
console.log(compare("BERKUDAT", "KUDA"));
console.log(compare("BERKUDAT", "KUDA"));
