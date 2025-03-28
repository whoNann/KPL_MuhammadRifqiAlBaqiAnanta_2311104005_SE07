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
        if (typeof count !== "number" || count < 0 || count > 10000000) {
            throw new Error("Jumlah play harus berupa angka positif dan tidak boleh lebih dari 10.000.000.");
        }
        if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
            throw new Error("Terjadi overflow! Play count melebihi batas maksimum yang diizinkan.");
        }
        this.playCount += count;
    }

    PrintVideoDetails() {
        console.log(`ID Video: ${this.id}`);
        console.log(`Judul: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

class SayaTubeUser {
    constructor(username) {
        if (typeof username !== "string" || username.length === 0) {
            throw new Error("Username harus berupa string yang tidak kosong.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.username = username;
        this.uploadedVideos = [];
    }

    AddVideo(video) {
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Parameter harus berupa instance dari SayaTubeVideo.");
        }
        this.uploadedVideos.push(video);
    }

    GetTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    PrintAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        this.uploadedVideos.forEach((video, index) => {
            console.log(`Video ${index + 1} judul: ${video.title}`);
        });
    }
}

const user = new SayaTubeUser("Muhammad Rifqi Al Baqi Ananta");
const videos = [
    new SayaTubeVideo("Review Film Inception - Ananta"),
    new SayaTubeVideo("Review Film Interstellar - Ananta"),
    new SayaTubeVideo("Review Film The Dark Knight - Ananta"),
    new SayaTubeVideo("Review Film Fight Club - Ananta"),
    new SayaTubeVideo("Review Film The Matrix - Ananta"),
    new SayaTubeVideo("Review Film Parasite - Ananta"),
    new SayaTubeVideo("Review Film Whiplash - Ananta"),
    new SayaTubeVideo("Review Film The Godfather - Ananta"),
    new SayaTubeVideo("Review Film The Shawshank Redemption - Ananta"),
    new SayaTubeVideo("Review Film Joker - Ananta")
];

videos.forEach(video => {
    user.AddVideo(video);
    video.IncreasePlayCount(1000);
});

user.PrintAllVideoPlaycount();
