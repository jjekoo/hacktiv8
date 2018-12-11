// Diberikan sebuah function numberProcessing(numberArr)
// yang menerima satu parameter berupa array yang berisikan angka.
// Tentukan nilai minimum, maksimum, rata-rata (genapkan ke bilangan terdekat),
// bilangan ganjil dan bilangan genap.

//Pembulatan secara manual tanpa Math.round
function pembulatan(num) {
  var result = [];

  for (var i = 0; i < num; i++) {
    var decimal = num - i;
  }

  if (decimal >= 0.5) {
    var x = 1 - decimal;
    result.push(num + x);
  } else if (decimal < 0.5) {
    result.push(num - decimal);
  }
  return result.join("");
}

function numberProcessing(numberArr) {
  //Mencari angka ganjil dan genap

  var odds = [];

  var evens = [];

  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] % 2 === 1) {
      odds.push(numberArr[i]);
    } else {
      evens.push(numberArr[i]);
    }
  }

  //Mencari angka terkecil

  var mini = numberArr.sort(function(a, b) {
    return a - b;
  });

  var min = mini.slice(0, 1);

  //Mencari angka terbesar

  var maxi = numberArr.sort(function(a, b) {
    return b - a;
  });

  var max = maxi.slice(0, 1);

  //Mencari nilai rata rata

  var mean = 0;

  for (var i = 0; i < numberArr.length; i++) {
    mean += numberArr[i] / numberArr.length;
  }

  return (
    "Min: " +
    min +
    ", Max: " +
    max +
    ", Mean: " +
    pembulatan(mean) +
    ", Odds: " +
    odds.join("-") +
    ", Evens: " +
    evens.join("-")
  );
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"
console.log(numberProcessing([99, 16, 69, 20, 10, 7, 8, 77]));
// "Min: 7, Max: 99, Mean: 38, Odds: 99-69-7-77, Evens: 16-20-10-8"
