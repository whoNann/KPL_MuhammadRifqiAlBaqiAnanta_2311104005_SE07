// Import module readline untuk input dari user
const readline = require("readline");

// Membuat interface untuk input/output terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fungsi untuk cek bilangan prima
function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

// Meminta input angka dari user
rl.question("Masukkan angka (1-10000): ", (inputString) => {
  const inputNumber = parseInt(inputString);

  // Validasi input harus angka 1-10000
  if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 10000) {
    console.log("Input tidak valid. Harap masukkan angka antara 1 hingga 10000.");
  } else {
    if (isPrime(inputNumber)) {
      console.log(`Angka ${inputNumber} merupakan bilangan prima`);
    } else {
      console.log(`Angka ${inputNumber} bukan merupakan bilangan prima`);
    }
  }
  rl.close();
});
