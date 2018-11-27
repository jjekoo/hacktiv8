//Diberikan sebuah function yang menerima dua parameter angka. 
//Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). 
//FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat 
//membagi habis kedua bilangan tersebut.

function faktorBesar (num1, num2) {
    // Your code here
    var hasil1 = [];
    var hasil2 = [];
    var result = [];

    for(var i = 1; i <= num1; i++){
        var x = num1/i
        hasil1.push(Math.round(x))
    }

    for(var j = 1; j <= num2; j++){
        var y = num2/j
        hasil2.push(Math.round(y))
    }
  
    for(var a = 0; a < hasil1.length; a++){
        for(var b = 0; b < hasil2.length; b++){            
            if(hasil1[a] === hasil2[b]){
                result.push(hasil1[a])
            }
        }
    }
    return result[0]
}
  
  // TEST CASES
console.log(faktorBesar(12, 16)); // 4
console.log(faktorBesar(50, 40)); // 10
console.log(faktorBesar(22, 99)); // 11
console.log(faktorBesar(24, 36)); // 12
console.log(faktorBesar(17, 23)); // 1