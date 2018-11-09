// soal 3
// buat array 1 - 30 menggunakan function kaskus()
// jika angka habis dibagi 3 mengembalikan "KAS"
// jika angka habis dibagi 6 mengembalikan "KUS"
// jika angka habis dibagi 15 mengembalikan "KASKUS"
// contoh hasil return = [1,2,"KAS",4,5,"KUS",7,8,"KAS",10,11,"KUS",13,14,"KASKUS",16,17,"KAS" ... dan seterusnya]

function kaskus(num1=0, num2=30) {
    var angka = [];
    while (num1<num2) {
      num1++;
      if (num1%15===0){
        angka.push("KASKUS")
      } else if (num1%6===0){
        angka.push("KUS")
      } else if (num1%3===0){
        angka.push("KAS")
      } else 
        (angka.push(num1))
    }
    return angka
}

console.log(kaskus())

// For looping //

function kaskus(num1,num2){
    var angka = [];
    var i = num1;
    for (i; i < num2; i++){
        if (i%15===0){
            angka.push("KASKUS")
        } else if (i%6===0){
            angka.push("KUS")
        } else if (i%3===0){
            angka.push("KAS")
        } else {
            angka.push(i)
        }
    }
    return angka
}

console.log(kaskus(1,30))