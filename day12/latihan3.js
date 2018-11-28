// [ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7];
// Buatlah program JavaScript untuk mencari modus (mode)
// Atau nilai yang paling sering muncul di dalam array tersebut.

function modus(nums){
    //var sorted = nums.sort(function(a, b){return a-b})
    var count = 0;
    var element = 0;

    for(var i = 0; i < nums.length; i++){
        var xcount = 0;
        var xelement = nums;
        for(var j = 0; j < nums.length; j++){
            if(nums[i] === xelement[j]){
                xcount++;
            }
        }
    }
}

console.log(modus([ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7]));