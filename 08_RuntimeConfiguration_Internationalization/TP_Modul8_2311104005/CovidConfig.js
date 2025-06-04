import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.join(__dirname, "covid_config.json");

const DEFAULT_CONFIG = {
  satuan_suhu: "celcius",
  batas_hari_deman: 14,
  pesan_ditolak: "Anda tidak diperbolehkan masuk ke dalam gedung ini",
  pesan_diterima: "Anda dipersilahkan untuk masuk ke dalam gedung ini"
};

export class CovidConfig {
  constructor() {
    this.config = this.loadConfig();
  }

  loadConfig() {
    try {
      if (!fs.existsSync(configPath)) {
        fs.writeFileSync(configPath, JSON.stringify(DEFAULT_CONFIG, null, 2));
        return { ...DEFAULT_CONFIG };
      }
      const data = fs.readFileSync(configPath, "utf-8");
      return { ...DEFAULT_CONFIG, ...JSON.parse(data) };
    } catch (err) {
      console.error("Gagal memuat konfigurasi, menggunakan nilai default:", err.message);
      return { ...DEFAULT_CONFIG };
    }
  }

  saveConfig() {
    try {
      fs.writeFileSync(configPath, JSON.stringify(this.config, null, 2));
    } catch (err) {
      console.error("Gagal menyimpan konfigurasi:", err.message);
    }
  }

  get(key) {
    return this.config[key];
  }

  set(key, value) {
    this.config[key] = value;
    this.saveConfig();
  }

  // Method untuk mengubah satuan suhu
  ubahSatuan() {
    if (this.config.satuan_suhu === "celcius") {
      this.config.satuan_suhu = "fahrenheit";
    } else {
      this.config.satuan_suhu = "celcius";
    }
    this.saveConfig();
    console.log(`Satuan suhu diubah ke: ${this.config.satuan_suhu}`);
  }
}
