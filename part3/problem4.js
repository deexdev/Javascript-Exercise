export const ubahHuruf = (kata) => {
    let huruf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result =""
    for (let i = 0; i < kata.length; i++) {
        for (let j = 0; j < huruf.length; j++) {
            if (kata[i] == huruf[j]) {
                let tambah = j + 10
                if(tambah > 25) {
                  tambah -= 26;  
                }
                result += huruf[tambah]
            }
        }
        if (kata[i] == " ") {
            result += " "
        }
    }

    return result;
};