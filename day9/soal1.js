// soal 1
// menggunakan fuction iterationNumber(angkaAwal, angkaAkhir)

function iterationNumber(num1=0, num2=10) {
  var angka=[];
  while (num1 < num2) {
    num1++;
    angka.push(num1)
  }
  return angka
}

console.log(iterationNumber())

// For Looping //

function iterationNumber(num1=1, num2=10) {
  var angka=[];
  var i = num1;
  for (i; i < num2; i++){
    angka.push(i)
  }
  return angka
}

console.log(iterationNumber())