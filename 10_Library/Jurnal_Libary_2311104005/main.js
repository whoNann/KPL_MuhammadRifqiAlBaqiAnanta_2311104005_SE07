const { FPB, KPK, Turunan, Integral } = require('./MatematicalLibrary');

console.log("=== PEMANGGILAN LIBRARY MATEMATIKA ===");
console.log("FPB(100, 125):", FPB(100, 125)); 
console.log("KPK(9, 6):", KPK(9, 6));   

console.log("\nTurunan([5, 0, -8]):", Turunan([5, 0, -8]));

console.log("\nIntegral([1, -2, 1]):", Integral([1, -2, 1]));
