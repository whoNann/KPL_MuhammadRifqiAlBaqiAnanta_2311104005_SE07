// Import module readline untuk input dari user
const readline = require('readline');

// Membuat interface untuk input/output terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Meminta nama dari user lalu menampilkan pesan selamat datang
rl.question("Masukkan nama Anda: ", (userName) => {
  console.log(`Selamat datang, ${userName}!`);
  rl.close();
});
