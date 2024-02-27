function removeDuplicate(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] != input[i-1]) {
            result.push(input[i])
        }
    }

    return result.length;
};

console.log(removeDuplicate([2,3,3,3,6,9,9]));
console.log(removeDuplicate([2,3,4,5,6,9,9]));
console.log(removeDuplicate([2,2,2,11]));
console.log(removeDuplicate([1,2,3,11,11]));