// soal 2
// pake function iterationNumber seperti soal 1 tapi tambahkan ganjil
// genap di sampingnya
// Contoh : ["1 = Ganjil", "2 = Genap", .... ]

function iterationNumber(num1=0, num2=10) {
    var angka=[];
    while (num1 < num2) {
        num1++;
        if (num1%2===0){
            angka.push(num1 + " = Genap")
        } else if (num1%2===1){
            angka.push(num1 + " = Ganjil")
        }
    }
    return angka
}
  
  console.log(iterationNumber())


// For Looping //

function iterationNumber(num1=1, num2=10){
    var angka = [];
    var i = num1
    for (i; i<num2; i++){
        if (i%2===0){
            angka.push(i+" = Genap")
        } else {
            angka.push(i+" = Ganjil")
        }
    }
    return angka
}
  
console.log(iterationNumber())