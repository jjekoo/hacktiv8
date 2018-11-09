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

function loopingAngka(a, b, c, d, e){
  while (a < 9) {
    a++;
    if (a%2===0) {
      console.log("Angka genap = " + a)
    } else if (a%2===1){
      console.log("Angka ganjil = " + a)
    }
  }
  while (b < 27) {
      b++;
      if (b%2===0) {
          console.log("Angka genap = " + b)
      } else if (b%2===1) {
          console.log("Angka ganjil = " + b)
      }
  }
  while (c < 99) {
      c++;
      if (c%2===0) {
          console.log("Angka genap = " + c)
      } else if (c%2===1) {
          console.log("Angka ganjil = " + c)
      }
  }
  while (d < 25) {
      d++;
      if (d%2===0) {
          console.log("Angka genap = " + d)
      } else if (d%2===1) {
          console.log("Angka ganjil = " + d)
      }
  }
  while (e < 122) {
      e++;
      if (e%2===0) {
          console.log("Angka genap = " + e)
      } else if (e%2===1) {
          console.log("Angka ganjil = " + e)
      }
  }
}

loopingAngka (5, 17, 33, 4, 99)

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
