import {ubahHuruf} from "../part3/problem4";

test("test ubah huruf", () => {
    const result = ubahHuruf("SEPULSA OKE");
    expect(result).toBe("COZEVCK YUO");
})