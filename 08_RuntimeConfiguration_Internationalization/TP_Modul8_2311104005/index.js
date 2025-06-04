import readline from "readline";
import { CovidConfig } from "./CovidConfig.js";

const config = new CovidConfig();

function tanyaUser(pertanyaan) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => rl.question(pertanyaan, ans => {
    rl.close();
    resolve(ans);
  }));
}

async function main() {
  // Tampilkan config sekarang
  console.log("== KONFIGURASI SAAT INI ==");
  console.log(config.config);

  // Contoh panggil method ubahSatuan
  const ubah = await tanyaUser("Ingin ubah satuan suhu? (y/n): ");
  if (ubah.trim().toLowerCase() === "y") {
    config.ubahSatuan();
  }

  const satuan = config.get("satuan_suhu");
  const batasHari = config.get("batas_hari_deman");
  const pesanDiterima = config.get("pesan_diterima");
  const pesanDitolak = config.get("pesan_ditolak");

  const suhuInput = await tanyaUser(`Berapa suhu badan anda saat ini? Dalam nilai ${satuan}: `);
  const hariInput = await tanyaUser("Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ");

  let suhu = parseFloat(suhuInput.replace(",", "."));
  let hari = parseInt(hariInput);

  let kondisiSuhu = false;
  if (satuan === "celcius") {
    kondisiSuhu = suhu >= 36.5 && suhu <= 37.5;
  } else if (satuan === "fahrenheit") {
    kondisiSuhu = suhu >= 97.7 && suhu <= 99.5;
  }

  const kondisiHari = hari < batasHari;

  if (kondisiSuhu && kondisiHari) {
    console.log(pesanDiterima);
  } else {
    console.log(pesanDitolak);
  }
}

main();
