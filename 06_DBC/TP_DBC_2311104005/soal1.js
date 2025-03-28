class SayaTubeVideo {
    constructor(title) {
        if (typeof title !== "string" || title.length === 0) {
            throw new Error("Judul video harus berupa string yang tidak kosong.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000); // Generate ID 5 digit
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (typeof count !== "number" || count < 0) {
            throw new Error("Jumlah play harus berupa angka positif.");
        }
        this.playCount += count;
    }

    PrintVideoDetails() {
        console.log(`ID Video: ${this.id}`);
        console.log(`Judul: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

const video = new SayaTubeVideo("Tutorial Design By Contract - Nanta");
video.IncreasePlayCount(100);
video.PrintVideoDetails();
