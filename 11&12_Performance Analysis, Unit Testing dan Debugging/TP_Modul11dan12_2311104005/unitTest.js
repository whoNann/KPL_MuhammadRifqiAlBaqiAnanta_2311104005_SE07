function assertEqual(actual, expected, testName) {
    const resultsDiv = document.getElementById("results");
    const result = document.createElement("div");
    
    if (actual === expected) {
        result.textContent = `✅ ${testName} passed`;
        result.style.color = "green";
    } else {
        result.textContent = `❌ ${testName} failed. Expected: "${expected}", Got: "${actual}"`;
        result.style.color = "red";
    }

    resultsDiv.appendChild(result);
}

assertEqual(CariGanjilGenap(7), "Ganjil", "Test bilangan ganjil");
assertEqual(CariGanjilGenap(8), "Genap", "Test bilangan genap");
assertEqual(CariGanjilGenap(0), "Genap", "Test nol");
assertEqual(CariGanjilGenap(2.5), "Bukan bilangan bulat", "Test bukan bilangan bulat");
