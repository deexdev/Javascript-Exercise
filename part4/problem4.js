function onceTime(value) {
    let result = []
    for (let i = 0; i < value.length; i++) {
        let checker = 0
        for (let j = 0; j < value.length; j++) {
            if (value[i] == value[j]) {
                checker++
            }
        }

        if (checker < 2) {
            result.push(value[i])
        };
        checker = 0
    }

    return result;
}

console.log(onceTime("1234123"));
console.log(onceTime("76523752"));
console.log(onceTime("12345"));
console.log(onceTime("1122334455"));