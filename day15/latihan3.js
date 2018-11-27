//Diberikan sebuah function yang menerima satu parameter berupa angka. 
//Function akan me-return true jika angka tersebut adalah bilangan prima. 
//Jika tidak, return false.

function isPrime (number) {
  var result = [];

  // Your code here
  for(var i = 1; i <= number; i++){
    if(number%i===0){
      result.push(i)
    }
  }
  if (result.length === 2){
    return true
  } else {
    return false
  }
}
  
  // TEST CASES
console.log(isPrime(3)); // true
console.log(isPrime(7)); // true
console.log(isPrime(6)); // false
console.log(isPrime(23)); // true
console.log(isPrime(33)); // false
console.log(isPrime(8)); // false