class KodeBuah {
    constructor() {
        this.kodeBuahMap = new Map([
            ["Apel", "A00"],
            ["Aprikot", "A01"],
            ["Alpukat", "C00"],
            ["Pisang", "D00"],
            ["Paprika", "E00"],
            ["Blackberry", "F00"],
            ["Ceri", "G00"],
            ["Kelapa", "H00"],
            ["Jagung", "I00"],
            ["Kurma", "K00"],
            ["Durian", "L00"],
            ["Anggur", "M00"],
            ["Melon", "N00"],
            ["Semangka", "O00"]
        ]);
    }

    getKodeBuah(namaBuah) {
        return this.kodeBuahMap.get(namaBuah) || "Kode tidak ditemukan";
    }
}

const kodeBuah = new KodeBuah();

console.log("Daftar Nama Buah:");
console.log("Apel, Aprikot, Alpukat, Pisang, Paprika, Blackberry, Ceri, Kelapa, Jagung, Kurma, Durian, Anggur, Melon, Semangka");

const namaBuah = "Ceri"; 
console.log(`Masukkan nama buah: ${namaBuah}`);
console.log(`Kode Buah ${namaBuah}: ${kodeBuah.getKodeBuah(namaBuah)}`);
