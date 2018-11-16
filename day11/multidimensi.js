// No.1
// Buat function bernama multiDimensi menerima 2 parameter yang
// Merupakan panjang sebuah array kemudian gambarkan
// Contoh :
// multiDimensi(2, 5)
// multiDimensi(3, 4)
// multiDimensi(5, 2)


function multiDimensi(num1, num2){
    var arr1 = [];
    var i = 1;
    for(i; i <= num2; i++){
      arr1.push(i)
    }
    
    // [1,2,3,4,5]
    
    var arr2 = [];
    var j = 1;
    for(j; j <= num1; j++){
      arr2.push(arr1)
    }
      
  return arr2
}
  
console.log(multiDimensi(2, 5));
console.log(multiDimensi(3, 4));
console.log(multiDimensi(5, 2));