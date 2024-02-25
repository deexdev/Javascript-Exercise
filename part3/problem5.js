function meanMedian(params) {
    let total = 0;
    let median = 0;
    for (let i = 0; i < params.length; i++) {
        total += params[i]
    }

    let totalArrays = params.length
    if (totalArrays % 2 == 0) {
        let forMedian = params[totalArrays/2 - 1] + params[totalArrays/2]
        median += forMedian/2
    }else{
        median += params[totalArrays/2 - 0.5]
    }
    
    let mean = total / totalArrays

    console.log(mean, median);

    return "=="
}

console.log(meanMedian([1,2,3,4]));
console.log(meanMedian([1,2,3,4,5]));
console.log(meanMedian([7,8,9,13,15]));
console.log(meanMedian([10,20,30,40,50]));