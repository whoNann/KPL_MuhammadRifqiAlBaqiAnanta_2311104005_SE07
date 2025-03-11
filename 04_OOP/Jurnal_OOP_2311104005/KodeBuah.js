class KodeBuah {
    constructor() {
        this.kodeBuahMap = new Map([
            ["Apel", "A00"],
            ["Aprikot", "B00"],
            ["Alpukat", "C00"],
            ["Pisang", "D00"],
            ["Paprika", "E00"],
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
console.log(`Kode Buah Apel: ${kodeBuah.getKodeBuah("Apel")}`);


// ubah message
