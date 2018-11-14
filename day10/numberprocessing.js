// Diberikan sebuah function numberProcessing(numberArr) 
// yang menerima satu parameter berupa array yang berisikan angka. 
// Tentukan nilai minimum, maksimum, rata-rata (genapkan ke bilangan terdekat), 
// bilangan ganjil dan bilangan genap.

function numberProcessing(numberArr){
    
    var min = Math.min(...numberArr)
    
    var max = Math.max(...numberArr)
    
    var mean = 0;
    for(var i = 0; i < numberArr.length; i++){
        mean += numberArr[i]/numberArr.length
    }

    var odd = [];
    var 

    
  
  return "Min: " + min + ", Max: " + max + ", Mean: " + Math.round(mean)
}
  
console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"