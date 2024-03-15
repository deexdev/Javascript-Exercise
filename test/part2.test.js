import {konversiNilai} from "../part2/problem1";
import {bilanganPrima} from "../part2/problem3";
import {palindrome} from "../part2/problem4";
import {exponentiation} from "../part2/problem5";
import {fullPrima} from "../part2/problem6";

test("test konversi nilai", () => {
    const result = konversiNilai(-100);
    expect(result).toBe("nilai tidak valid");
});

test ("test bilangan prima", () => {
    const result = bilanganPrima(11);
    expect(result).toBe(true);
})

test ("test palindrome", () => {
    const result = palindrome("mobil");
    expect(result).toBe(false);
})

test ("test exponentiation", () => {
    const result = exponentiation(2, 3);
    expect(result).toBe(8);
})

test ("test full prima", () => {
    const result = fullPrima(23);
    expect(result).toBe(true);
})