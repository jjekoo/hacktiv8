//Print angka 3-30//
//Jika angka habis dibagi 3, print "HACK"//
//Jika angka habis dibagi 6, print "FOX"//
//Jika angka habis dibagi 15, print "HACKFOX"//

var a = 0;

while (a < 30) {
 a += 3;
 if(a % 3 === 0){
    console.log("HACK" + a)
 } else if (a % 6 === 0){
     console.log("FOX" + a)
 } else if (a % 15 === 0){
     console.log("HACKFOX" + a)
 }
}

//Print angka 1-100//
//Jika angka ganjil maka "Angka Ganjil = ...//
//Jika angka genap maka "Angka Genap = ...//


var a = 0


while(a < 100) {
  a++;
  if(a%2===0) {
    console.log("Angka Genap = " + a)
  } else if(a%2===1) {
    console.log("Angka Ganjil = " + a)
  }
}