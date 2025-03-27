const array = new Array(50).fill(0).map((_, index) => index);

array.forEach((angka) => {
    let output = angka.toString();
    if (angka % 2 === 0 && angka % 3 === 0) {
        output += " #$#$";
    } else if (angka % 2 === 0) {
        output += " ##";
    } else if (angka % 3 === 0) {
        output += " $$";
    }
    console.log(output);
});
