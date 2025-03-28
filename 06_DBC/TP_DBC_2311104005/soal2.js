class SayaTubeVideo {
    constructor(title) {
        if (typeof title !== "string" || title.length === 0 || title.length > 100) {
            throw new Error("Judul video harus berupa string yang tidak kosong dan maksimal 100 karakter.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000); // ID acak 5 digit
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        try {
            if (typeof count !== "number" || count < 0 || count > 10000000) {
                throw new Error("Jumlah play harus berupa angka positif dan tidak boleh lebih dari 10.000.000.");
            }

            if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
                throw new Error("Terjadi overflow! Play count melebihi batas maksimum yang diizinkan.");
            }

            this.playCount += count;
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    }

    PrintVideoDetails() {
        console.log(`ID Video: ${this.id}`);
        console.log(`Judul: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

try {
    let video = new SayaTubeVideo("Tutorial Design By Contract - Nanta");

    video.IncreasePlayCount(5000000);
    video.PrintVideoDetails();

    console.log("\nMenguji Overflow Play Count...");
    for (let i = 0; i < 1000; i++) {
        video.IncreasePlayCount(10000000); // Tambah play count dengan nilai besar
    }

    video.PrintVideoDetails();
} catch (error) {
    console.error(`Fatal Error: ${error.message}`);
}
