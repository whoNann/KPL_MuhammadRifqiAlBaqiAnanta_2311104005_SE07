class DoorMachine {
    constructor() {
        this.state = "Terkunci";
    }

    ubahState(stateBaru) {
        console.log(`Pintu berubah dari ${this.state} ke ${stateBaru}`);
        this.state = stateBaru;
        this.tampilkanStatus();
    }

    tampilkanStatus() {
        const status = {
            "Terkunci": "Pintu terkunci",
            "Terbuka": "Pintu tidak terkunci"
        };
        console.log(status[this.state] || "Status pintu tidak dikenali");
    }
}

// Simulasi perubahan state di method utama
function main() {
    const pintu = new DoorMachine();
    pintu.ubahState("Terbuka");
    pintu.ubahState("Terkunci");
}

main();
