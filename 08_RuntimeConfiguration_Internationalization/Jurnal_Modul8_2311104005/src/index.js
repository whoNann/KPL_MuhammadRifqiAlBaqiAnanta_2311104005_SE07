import readline from "readline";
import { BankTransferConfig } from "./BankTransferConfig.js";

const config = new BankTransferConfig();

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
  const lang = config.get("lang");
  const transferConfig = config.get("transfer");
  const methods = config.get("methods");
  const confirmation = config.get("confirmation");

  // 1. Input jumlah transfer
  let pertanyaanJumlah =
    lang === "en"
      ? "Please insert the amount of money to transfer: "
      : "Masukkan jumlah uang yang akan di-transfer: ";
  const jumlahInput = await tanyaUser(pertanyaanJumlah);
  const jumlah = parseInt(jumlahInput);

  // 2. Hitung biaya transfer & total biaya
  let biayaTransfer =
    jumlah <= transferConfig.threshold
      ? transferConfig.low_fee
      : transferConfig.high_fee;
  let total = jumlah + biayaTransfer;

  if (lang === "en") {
    console.log(`Transfer fee = ${biayaTransfer}`);
    console.log(`Total amount = ${total}`);
  } else {
    console.log(`Biaya transfer = ${biayaTransfer}`);
    console.log(`Total biaya = ${total}`);
  }

  // 3. Pilih metode transfer
  let metodePrompt =
    lang === "en"
      ? "Select transfer method:"
      : "Pilih metode transfer:";
  console.log(metodePrompt);

  methods.forEach((m, i) => {
    console.log(`${i + 1}. ${m}`);
  });

  const metodeInput = await tanyaUser("> ");

  // 4. Konfirmasi transaksi
  const confWord = lang === "en" ? confirmation.en : confirmation.id;
  const confPrompt =
    lang === "en"
      ? `Please type "${confWord}" to confirm the transaction: `
      : `Ketik "${confWord}" untuk mengkonfirmasi transaksi: `;

  const confInput = await tanyaUser(confPrompt);

  if (confInput.trim().toLowerCase() === confWord) {
    if (lang === "en") {
      console.log("The transfer is completed");
    } else {
      console.log("Proses transfer berhasil");
    }
  } else {
    if (lang === "en") {
      console.log("Transfer is cancelled");
    } else {
      console.log("Transfer dibatalkan");
    }
  }
}

main();
