function Diskriminan([a, b, c]) {
    return b * b - 4 * a * c;
}

function JumlahDanHasilKaliAkar([a, b, c]) {
    // Jumlah akar = -b / a, Hasil kali akar = c / a
    if (a === 0) return null;
    return {
        jumlah: -b / a,
        hasilKali: c / a
    };
}

function PersamaanKuadratDariAkar(x1, x2) {
    return [1, -(x1 + x2), x1 * x2]; // [a, b, c]
}

function KaliPolinomial1([a, b], [c, d]) {
    let p2 = a * c;
    let p1 = a * d + b * c;
    let p0 = b * d;
    return [p2, p1, p0];
}

module.exports = {
    AkarPersamaanKuadrat,
    HasilKuadrat,
    Diskriminan,
    JumlahDanHasilKaliAkar,
    PersamaanKuadratDariAkar,
    KaliPolinomial1
};
