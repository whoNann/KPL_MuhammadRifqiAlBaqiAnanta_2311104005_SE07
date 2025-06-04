// Import module readline untuk input dari user
const readline = require("readline");

// Membuat interface untuk input dan output terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fungsi untuk memproses input huruf
rl.question("Masukkan satu huruf (kapital): ", (inputHuruf) => {
  // Validasi: input harus satu huruf dan kapital A-Z
  if (inputHuruf.length !== 1 || !/^[A-Z]$/.test(inputHuruf)) {
    console.log("Input salah! Masukkan satu huruf kapital (A-Z).");
  } else {
    // Daftar huruf vokal
    const vokal = ["A", "I", "U", "E", "O"];

    // Cek apakah input merupakan vokal atau konsonan
    if (vokal.includes(inputHuruf)) {
      console.log(`Huruf ${inputHuruf} merupakan huruf vokal`);
    } else {
      console.log(`Huruf ${inputHuruf} merupakan huruf konsonan`);
    }
  }
  // Menutup interface readline
  rl.close();
});
