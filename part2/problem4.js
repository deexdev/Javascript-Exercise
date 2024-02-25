const palindrome = (nilai) => {
    for (let i = 1; i <= nilai.length; i++) {
        if (nilai[i-1] != nilai[nilai.length - i]) {
            return false
        }
    }

    return true
}

console.log(palindrome("civic"));
console.log(palindrome("katak"));
console.log(palindrome("kasur rusak"));
console.log(palindrome("kupu-kupu"));
console.log(palindrome("lion"));