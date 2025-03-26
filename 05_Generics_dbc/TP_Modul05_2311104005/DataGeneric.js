class DataGeneric {
    constructor(data) {
        this.data = data;
    }
  
    PrintData() {
        console.log(`Data yang tersimpan pada sistem: ${this.data}`);
    }
  }
  
  const nim = "2311104005";
  const dataNIM = new DataGeneric(nim);
  dataNIM.PrintData();