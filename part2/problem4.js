export const palindrome = (nilai) => {
    for (let i = 1; i <= nilai.length; i++) {
        if (nilai[i-1] != nilai[nilai.length - i]) {
            return false
        }
    }

    return true
};