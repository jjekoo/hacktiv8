function targetTerdekat(arr) {
  // you can only write your code here!

  var result = [];
  var o = [];
  var x = [];
  var zero = 0;

  //Untuk mencari posisi o dan x dari kiri

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      o.push(i);
    }
    if (arr[i] === "x") {
      x.push(i);
    }
  }

  //untuk mecari jarak o dan x

  for (var j = 0; j < x.length; j++) {
    var a = o[0] - x[j];
    var b = x[j] - o[0];
    if (o[0] > x[j]) {
      result.push(a);
    } else if (o[0] < x[j]) {
      result.push(b);
    }
  }

  // untuk mencari jarak terdekat antara o dan x
  // dengan mengambil hasil pengurangan yang terkecil

  var akhir = result.sort();

  if (x.length === 0 || o.length === 0) {
    return zero;
  } else {
    return akhir[0];
  }
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat(["o", " ", " ", "x", "x", " ", " ", "x"])); // 3
