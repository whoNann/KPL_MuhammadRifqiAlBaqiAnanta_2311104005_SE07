class PosisiKarakterGame {
    constructor() {
        this.state = "Berdiri";
    }

    ubahState(stateBaru) {
        console.log(`Posisi berubah dari ${this.state} ke ${stateBaru}`);
        this.state = stateBaru;
        this.tampilkanAksi();
    }

    tampilkanAksi() {
        const aksi = {
            "Berdiri": "posisi standby",
            "Jongkok": "posisi istirahat",
            "Terbang": "posisi take off",
            "Mendarat": "posisi landing"
        };
        console.log(aksi[this.state] || "Aksi tidak dikenali");
    }
}

const karakter = new PosisiKarakterGame();
karakter.ubahState("Terbang");
karakter.ubahState("Mendarat");
karakter.ubahState("Jongkok");
