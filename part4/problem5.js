function pairWithTurgetSum(array, target) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(target-array[i]) != -1) {
            result.push(i)
            result.push(array.indexOf(target-array[i]));
            break;
        }
    }

    return result
}

console.log(pairWithTurgetSum([1,2,3,4,6], 6));
console.log(pairWithTurgetSum([2,5,9,11], 11));