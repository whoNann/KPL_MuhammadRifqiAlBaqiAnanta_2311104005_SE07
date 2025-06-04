// Membuat array angka 0 sampai 49
const numbers = Array.from({ length: 50 }, (_, index) => index);

// Melakukan iterasi untuk setiap angka dan menambahkan tanda sesuai aturan
numbers.forEach((number) => {
  let output = number.toString();
  if (number % 2 === 0 && number % 3 === 0) {
    output += " #$#$";
  } else if (number % 2 === 0) {
    output += " ##";
  } else if (number % 3 === 0) {
    output += " $$";
  }
  console.log(output);
});
