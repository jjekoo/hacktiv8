// No.2
// Sama seperti di No.1 tapi jika masuk index pertama
// Print first dan index terakhir print last angka bertambah => [[1,2,3],[4,5,6],[7,8,9]]
// tidak mengulang dari 1
// Contoh :
// multiDimensi(2, 5) => [ ["first",2,3,4,"last"], ["first",7,8,9,"last"] ]
// multiDimensi(3, 4) => [ ["first", 2, 3,"last"], ["first", 6, 7,"last"], ["first", 10, 11,"last"] ]
// multiDimensi(5, 2) => [ ["first" , "last" ], ["first" , "last" ], ["first" , "last" ], ["first" , "last" ], ["first" , "last" ],]

function multiDimensi(num1, num2){
    var arr1 = [];
    var arr2 = [];
    var i = 1;
    var j = 1;
    var k = 0;
    var x = 0;
    var y = 0;
    var hehe = num2;

    // [1-num2]

    for(i; i <= num1*num2 ; i++){
        arr1.push(i)    
    }

    // Memasukan arr1 yang telah dibagi kedalam arr2

    for(j; j <= num1; j++){
        y += hehe
        arr2.push(arr1.slice(x, y))
        x += hehe
    }

    // Mengganti angka pertama dan angka terahkir arr1 yang telah dibagi menjadi "First" dan "Last"
    
    for (k; k < num1; k++){
        arr2[k].shift()
        arr2[k].unshift("First")
        arr2[k].pop()
        arr2[k].push("Last")
    }
    return arr2
} 

console.log(multiDimensi(2, 5));
console.log(multiDimensi(3, 4));
console.log(multiDimensi(5, 2));