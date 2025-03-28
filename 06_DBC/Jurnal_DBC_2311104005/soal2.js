class SayaTubeVideo {
    constructor(title) {
        if (typeof title !== "string" || title.length === 0 || title.length > 200) {
            throw new Error("Judul video harus berupa string yang tidak kosong dan maksimal 200 karakter.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        try {
            if (typeof count !== "number" || count < 0 || count > 25000000) {
                throw new Error("Jumlah play harus berupa angka positif dan tidak boleh lebih dari 25.000.000.");
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

class SayaTubeUser {
    constructor(username) {
        if (typeof username !== "string" || username.length === 0 || username.length > 100) {
            throw new Error("Username harus berupa string yang tidak kosong dan maksimal 100 karakter.");
        }
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.username = username;
        this.uploadedVideos = [];
    }

    AddVideo(video) {
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Objek harus instance dari SayaTubeVideo.");
        }
        if (video.playCount > Number.MAX_SAFE_INTEGER) {
            throw new Error("Video memiliki play count yang melebihi batas integer maksimum.");
        }
        this.uploadedVideos.push(video);
    }

    GetTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    PrintAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        for (let i = 0; i < Math.min(8, this.uploadedVideos.length); i++) {
            console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
        }
    }
}

try {
    let user = new SayaTubeUser("Review Film Nanta");
    
    let video1 = new SayaTubeVideo("Film A");
    let video2 = new SayaTubeVideo("Film B");
    let video3 = new SayaTubeVideo("Film C");
    
    video1.IncreasePlayCount(1000000);
    video2.IncreasePlayCount(2000000);
    video3.IncreasePlayCount(1500000);
    
    user.AddVideo(video1);
    user.AddVideo(video2);
    user.AddVideo(video3);
    
    user.PrintAllVideoPlaycount();
    console.log(`Total Play Count: ${user.GetTotalVideoPlayCount()}`);
} catch (error) {
    console.error(`Fatal Error: ${error.message}`);
}
