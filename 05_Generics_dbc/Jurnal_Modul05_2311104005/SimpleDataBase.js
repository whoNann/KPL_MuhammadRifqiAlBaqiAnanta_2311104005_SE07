// Langkah 6: Membuat class SimpleDataBase dengan property generic
class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    AddNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date().toUTCString());
    }

    PrintAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index]}`);
        });
    }
}

const database = new SimpleDataBase();

database.AddNewData(12);
database.AddNewData(34);
database.AddNewData(56);

database.PrintAllData();
