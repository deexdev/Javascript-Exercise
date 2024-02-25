//Konversi Nilai
function konversiNilai(nilai) {
    if (nilai < 0 || nilai > 100) {
        console.log("nilai tidak valid");
    }else if(nilai <= 34){
        console.log("D");
    }else if(nilai <= 49){
        console.log("C");
    }else if(nilai <= 64){
        console.log("B");
    }else if(nilai <= 79){
        console.log("B+");
    }else{
        console.log("A");
    }
}

console.log(konversiNilai(-100));