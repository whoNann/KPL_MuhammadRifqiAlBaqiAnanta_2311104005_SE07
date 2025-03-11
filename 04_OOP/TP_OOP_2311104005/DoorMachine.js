class DoorMachine {
    constructor() {
        this.state = "Terkunci";
        this.tampilkanStatus();
    }

    ubahState(stateBaru) {
        this.state = stateBaru;
        this.tampilkanStatus();
    }

    tampilkanStatus() {
        if (this.state === "Terkunci") {
            console.log("Pintu terkunci");
        } else if (this.state === "Terbuka") {
            console.log("Pintu tidak terkunci");
        } else {
            console.log("Status pintu tidak dikenali");
        }
    }
}

// Simulasi perubahan state
const pintu = new DoorMachine();
pintu.ubahState("Terbuka");
pintu.ubahState("Terkunci");