/* Soal pertama
* Buat fungsi dengan nama loopingAngka dengan nilai minimal
* sebagai parameter pertama dan nila akhir sebagai parameter
* kedua. Contoh loopingAngka(5, 9) menghasilkan 5,6,7,8,9. Contoh kedua
* loopingAngka (17, 28) menghasilkan 17,18,19,20,21,22,23,24,25,26,27,28

/* Soal kedua
* Lanjutkan soal pertama namun keluarkan hasil ganjil dan genap


/* - loopingAngka (33, 99)
*  - loopingAngka (4, 25)
*  - loopingAngka (99, 122)

/* Soal ketiga 
* Buat fungsi luas segitiga

/* Soal keempat
* Buat fungsi luas lingkaran */

/* Soal kelima
* Cari nilai tengah yang menerima 2 parameter. Jika nilai tengah tidak bulat
* maka bulatkan ke angka dibawahnya 
* Contoh1 nilaiTengah(33, 99) menghasilkan 66
* Contoh2 nilaiTengah(7, 16) menghailskan nilai 11 */

/* NO.1 & NO.2 */

function loopingAngka(num1 = 5, num2 = 17, num3 = 33, num4 = 4, num5 = 99){
  while(num1 < 9) {
    num1++;
    if (num1%2===0) {
      console.log("Angka Genap = " + num1)
    } else if (num1%2===1) {
      console.log("AngkaGanjil = " + num1)
    }
  }
  while(num2 < 28) {
    num2++;
    if (num2%2===0){
      console.log("Angka Genap = " + num2)
    } else if (num2%2===1) {
      console.log("Angka Ganjil = " + num2)
    }
  }
  while(num3 < 99) {
    num3++;
    if (num3%2===0) {
      console.log("Angka Genap = " + num3)
    } else if (num3%2===1) {
      console.log ("Angka Ganjil = " + num3)
    }
  while(num4 < 25) {
    num4++;
    if (num4%2===0) {
      console.log("Angka Genap = " + num4)
    } else if (num4%2===1) {
      console.log ("Angka Ganjil = " + num4)
    }
  while(num5 < 122) {
    num5++;
    if (num5%2===0) {
      console.log("Angka Genap = " + num5)
    } else if (num5%2===1) {
      console.log ("Angka Ganjil = " + num5)
    }
  }
}

loopingAngka(5, 17)

/* NO.3 */

function luassegitiga(a=6, t=4) {
  return a * t / 2
}

console.log(luassegitiga())

/* NO.4 */

function luaslingkaran(r=7) {
  return 3.14 * r * r
}

console.log(luaslingkaran())

/* NO.5 */

function nilaiTengah(a, b) {
  var c = a+b/2;
  if (c%1===0) {
    console.log("Nilai tengah adalah " + c)
  } else {
    console.log("Nilai tengah adalah " + (c - 0.5))
  } 
}

nilaiTengah(22, 55)
