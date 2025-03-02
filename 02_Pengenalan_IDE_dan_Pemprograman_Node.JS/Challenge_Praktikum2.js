const readline = require('readline-sync');

// Memasukkan jumlah barang
const jumlahBarang = parseInt(readline.question('Masukkan jumlah barang: '));
let totalHarga = 0;
let hargaBarang = [];

// Memasukkan harga setiap barang
for (let i = 0; i < jumlahBarang; i++) {
  let harga = parseInt(readline.question(`Masukkan harga barang ke-${i + 1}: `));
  hargaBarang.push(harga);
  totalHarga += harga;
}

// Memilih kategori diskon
let kategoriDiskon = '';
if (totalHarga > 100000) {
  kategoriDiskon = 'Diskon Besar';
} else if (totalHarga >= 50000 && totalHarga <= 100000) {
  kategoriDiskon = 'Diskon Sedang';
} else {
  kategoriDiskon = 'Tidak Ada Diskon';
}

// Menampilkan hasil
console.log('\nOutput yang diharapkan :\n');
console.log(`Total harga: ${totalHarga}`);
console.log(`Jumlah barang: ${jumlahBarang}`);
console.log(`Kategori Diskon: ${kategoriDiskon}\n`);

// Menampilkan informasi tambahan tiap barang
for (let i = 0; i < jumlahBarang; i++) {
  console.log(`Informasi tambahan untuk barang ke-${i + 1}`);
}
