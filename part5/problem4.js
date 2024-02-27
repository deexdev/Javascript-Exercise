function findMuxSumArray(k, arr) {
    let result = 0
    for (let i = k-1; i < k-1+k; i++) {
        result += arr[i];
    }

    return result;
};

console.log(findMuxSumArray(3, [2,1,5,1,3,2]));
console.log(findMuxSumArray(2, [2,3,4,1,5]));
console.log(findMuxSumArray(2, [2,1,4,1,1]));
console.log(findMuxSumArray(3, [2,1,4,1,1]));
console.log(findMuxSumArray(4, [2,1,4,1,1]));