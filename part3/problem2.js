function drawX(nilai) {
    let result = ""
    let total = nilai * nilai
    for (let i = 1; i <= total; i++) {
        if (i % 3 == 0) {
            result += "X"
        }else if (i % 2 == 0){
            result += "Z"
        }else {
            result += "Y"
        }

        if (i % nilai == 0) {
            console.log(result);
            result = ""
        }
    }
}

console.log(drawX(3));
console.log(drawX(5));