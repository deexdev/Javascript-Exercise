function joinArray(arrayA, arrayB) {
    let result = []
    let join = arrayA.concat(arrayB).sort();
    for (let i = 0; i < join.length; i++) {
        if (join[i] != join[i-1] || join[i-1] == undefined ) {
            result.push(join[i])
        }
    }

    return result;
}

console.log(joinArray(["apel", "nanas", "anggur"], ["pisang", "apel"]));