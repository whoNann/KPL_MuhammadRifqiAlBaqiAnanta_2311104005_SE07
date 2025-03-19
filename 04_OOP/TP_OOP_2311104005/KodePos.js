class KodePos {
    constructor() {
        this.kodePosMap = new Map([
            ["Batununggal", "40266"],
            ["Kujangsari", "40287"],
            ["Mengger", "40267"],
            ["Wates", "40256"],
            ["Cijaura", "40287"],
            ["Jatisari", "40286"],
            ["Margasari", "40286"],
            ["Sekejati", "40286"],
            ["Kebonwaru", "40272"],
            ["Maleer", "40274"],
            ["Samoja", "40273"]
        ]);
    }

    getKodePos(kelurahan) {
        return this.kodePosMap.get(kelurahan) || "Kode pos tidak ditemukan";
    }
}

const kodePos = new KodePos();

console.log("Daftar Nama Kelurahan:");
console.log("Batununggal, Kujangsari, Mengger, Wates, Cijaura, Jatisari, Margasari, Sekejati, Kebonwaru, Maleer, Samoja");

const kelurahan = "Wates";
console.log(`Masukkan nama kelurahan: ${kelurahan}`);
console.log(`Kode Pos ${kelurahan}: ${kodePos.getKodePos(kelurahan)}`);
