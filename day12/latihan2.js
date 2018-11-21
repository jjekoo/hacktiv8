var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';

//Dari variabel di atas, 
//buatlah sebuah program JavaScript untuk membuat array baru seperti contoh di bawah:
// [ ['dimitri', 'dimitri@mail.com', 'male'],
//   ['icha', 'icha@mail.com', 'female'],
//   ['windi', 'windi@mail.com', 'female'] ]

var orang = text.split(",")

var orok = [];

var demit = [];

var i = 0;

for(i; i < orang.length; i++){
  orok.push(orang[i])
  var a = orok[i].split(":")
  demit.push(a)
}

console.log(demit)