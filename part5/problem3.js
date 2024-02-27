function arrayUnique(arrayA, arrayB) {
    let result = [];
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayB.indexOf(arrayA[i]) < 0) {
            result.push(arrayA[i]);
        }
    }

    return result;
}

console.log(arrayUnique([1,2,3,4], [1,3,5,10,16]));
console.log(arrayUnique([10,20,30,40], [5,10,15,59]));
console.log(arrayUnique([1,3,7], [1,3,5]));
console.log(arrayUnique([3,5],[3,8]));