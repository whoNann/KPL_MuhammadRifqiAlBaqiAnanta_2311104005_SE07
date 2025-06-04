import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.join(__dirname, "bank_transfer_config.json");

const DEFAULT_CONFIG = {
  lang: "en",
  transfer: {
    threshold: 25000000,
    low_fee: 6500,
    high_fee: 15000
  },
  methods: [
    "RTO (real-time)",
    "SKN",
    "RTGS",
    "BI FAST"
  ],
  confirmation: {
    en: "yes",
    id: "ya"
  }
};

export class BankTransferConfig {
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
}
