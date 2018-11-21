function isArithmeticProgression (numbers) {
    // Your code here
    var i = 0, x = 1, y = 0;
    var test = numbers[1] - numbers[0]
    var cond = true;
    for(i; i < numbers.length - 1; i++){
        if ( numbers[x] - numbers[y] !==  test){
            cond = false
        }
        x++;
        y++;
    }
    return cond
}
  
  // TEST CASES
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log(isArithmeticProgression([2, 4, 6, 8])); // true
console.log(isArithmeticProgression([2, 6, 18, 54])); // false
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false