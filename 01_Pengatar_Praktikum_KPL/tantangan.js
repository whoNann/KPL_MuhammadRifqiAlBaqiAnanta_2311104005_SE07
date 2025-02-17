import process from 'process';
import readline from 'readline';

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question('Siapa nama kamu? ', (nama) => {
    input.question('Jurusan kamu? ', (jurusan) => {
      input.question('Universitas kamu? ', (universitas) => {
        input.question('Umur kamu? ', (umur) => {
          console.log(`\nHalo, ${nama}!`);
          console.log(`Kamu mengambil jurusan ${jurusan} di ${universitas}.`);
          console.log(`Saat ini kamu berusia ${umur} tahun.`);
          input.close();
        });
      });
    });
  });