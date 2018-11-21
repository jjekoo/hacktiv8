var numbers = [ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ];

// Dari array numbers di atas, 
// Buatlah program JavaScript untuk mencari modus (mode)
// Atau nilai yang paling sering muncul di dalam array tersebut.

var sorted = numbers.sort((a,b) => b-a)

var i = 0;
var j = 0;
var nums = 0;
var count = 0;

for(i; i < sorted.length; i++){
    var nums0 = numbers[i];
    var count0 = 0;
    for(j; j < numbers.length; j++){
        if (numbers === nums0){
        nums0++;}
        if (nums0 > count){
            nums = nums0;
            count = count0;
        }
    }
}

console.log("Mode : " + nums)