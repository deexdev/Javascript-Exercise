export const konversiNilai = (nilai) => {
    if (nilai < 0 || nilai > 100) {
        return "nilai tidak valid";
    }else if(nilai <= 34){
        return "D";
    }else if(nilai <= 49){
        return "C";
    }else if(nilai <= 64){
        return "B";
    }else if(nilai <= 79){
        return "B+";
    }else{
        return "A"
    }
}; 