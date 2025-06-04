function CariGanjilGenap(a) {
    if (!Number.isInteger(a)) return "Bukan bilangan bulat";
    if (a % 2 === 0) return "Genap";
    else return "Ganjil";
}

function handleButtonClick() {
    const inputElement = document.getElementById("inputNumber");
    const outputDiv = document.getElementById("output");
    const resultText = document.getElementById("resultText");
    const resultIcon = document.getElementById("resultIcon");

    const value = inputElement.value.trim();
    const number = Number(value);

    if (isNaN(number)) {
        resultText.textContent = "Input tidak valid";
        resultIcon.textContent = "⚠️";
        outputDiv.classList.remove("opacity-0", "h-0");
        outputDiv.classList.add("opacity-100", "h-auto", "bg-red-100", "text-red-700", "animate__animated", "animate__shakeX");
        return;
    }

    const hasil = CariGanjilGenap(number);
    resultText.textContent = `Bilangan tersebut adalah: ${hasil}`;

    // Icon sesuai hasil
    if (hasil === "Ganjil") {
        resultIcon.textContent = "🔢";
        outputDiv.classList.add("bg-purple-100", "text-purple-800");
    } else if (hasil === "Genap") {
        resultIcon.textContent = "🟦";
        outputDiv.classList.add("bg-green-100", "text-green-800");
    } else {
        resultIcon.textContent = "❔";
        outputDiv.classList.add("bg-gray-100", "text-gray-800");
    }

    outputDiv.classList.remove("opacity-0", "h-0");
    outputDiv.classList.add("opacity-100", "h-auto", "animate__animated", "animate__fadeInUp");

    setTimeout(() => {
        outputDiv.classList.remove("animate__animated", "animate__fadeInUp", "animate__shakeX");
    }, 1000);
}
