// Diberikan sebuah function numberProcessing(numberArr) 
// yang menerima satu parameter berupa array yang berisikan angka. 
// Tentukan nilai minimum, maksimum, rata-rata (genapkan ke bilangan terdekat), 
// bilangan ganjil dan bilangan genap.

function numberProcessing(numberArr){
    
    var mini = numberArr.sort(
        function(a, b) 
        {return a-b}
        );
    
    var min = mini.slice(0, 1);

    var maxi = numberArr.sort(
        function(a, b)
        {return b-a}
        );

    var max = maxi.slice(0, 1)
    
    var mean = 0;
    for(var i = 0; i < numberArr.length; i++){
        mean += numberArr[i]/numberArr.length
    }

    var oddi = numberArr.filter(
        function(i)
        {return i%2===1 }
        );
    var odds = oddi.join("-")

    var evan = numberArr.filter(
        function(k)
        {return k%2===0}
    );

    var even = evan.join("-")

  
  return "Min: " + min +  ", Max: " + max + ", Mean: " + Math.round(mean) + ", Odds: " + odds + ", Evens: " + even
}
  
console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"