class Penjumlahan {
    JumlahTigaAngka(a, b, c) {
        return Number(a) + Number(b) + Number(c);
    }
}

const penjumlahan = new Penjumlahan();
let angka1 = "12";
let angka2 = "34";
let angka3 = "56";
let nimTerakhir = 5;

let hasil;
if (nimTerakhir === 1 || nimTerakhir === 2) {
    hasil = penjumlahan.JumlahTigaAngka(parseFloat(angka1), parseFloat(angka2), parseFloat(angka3));
    console.log(`Hasil penjumlahan (float): ${hasil}`);
} else if (nimTerakhir === 3 || nimTerakhir === 4 || nimTerakhir === 5) {
    hasil = penjumlahan.JumlahTigaAngka(parseFloat(angka1), parseFloat(angka2), parseFloat(angka3));
    console.log(`Hasil penjumlahan (double): ${hasil}`);
} else if (nimTerakhir === 6 || nimTerakhir === 7 || nimTerakhir === 8) {
    hasil = penjumlahan.JumlahTigaAngka(parseInt(angka1), parseInt(angka2), parseInt(angka3));
    console.log(`Hasil penjumlahan (int): ${hasil}`);
} else if (nimTerakhir === 9 || nimTerakhir === 0) {
    hasil = penjumlahan.JumlahTigaAngka(BigInt(angka1), BigInt(angka2), BigInt(angka3));
    console.log(`Hasil penjumlahan (long): ${hasil}`);
}
