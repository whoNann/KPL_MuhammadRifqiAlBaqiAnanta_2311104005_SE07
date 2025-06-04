function Pangkat(a, b) {
    return Math.pow(a, b);
}

function AkarKuadrat(a) {
    return Math.sqrt(a);
}

function EvaluasiPolinomial(persamaan, x) {
    let hasil = 0;
    let n = persamaan.length;
    for (let i = 0; i < n; i++) {
        hasil += persamaan[i] * Math.pow(x, n - i - 1);
    }
    return hasil;
}

function DeretGeometri(a, r, n) {
    // jumlah n suku pertama deret geometri: S = a * (r^n - 1) / (r - 1)
    if (r === 1) return a * n;
    return a * (Math.pow(r, n) - 1) / (r - 1);
}

module.exports = { Pangkat, AkarKuadrat, EvaluasiPolinomial, DeretGeometri };
