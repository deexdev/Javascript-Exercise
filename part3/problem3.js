function cetakTable(nilai) {
    let cetak = [];
    let penambah = 1;
    let lastValue = 0;
    for (let i = 0; i < nilai; i++) {
        lastValue += i + 1
        for (let j = 0; j < nilai; j++) {
            cetak.push(lastValue);
            lastValue += penambah;
        };

        lastValue = 0
        penambah++
        console.log(cetak.toString());
        cetak = [];
    };

    return "==="
}

console.log(cetakTable(9));