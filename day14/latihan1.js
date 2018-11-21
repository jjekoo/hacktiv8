function compareNumbers (num1, num2) {
// Your code here
if (num2 > num1){
        return true
    } else if (num2 === num1){
        return -1
    } else {
        return false
    }
}

// TEST CASES
console.log(compareNumbers(5, 8)); // true
console.log(compareNumbers(5, 3)); // false
console.log(compareNumbers(4, 4)); // -1
console.log(compareNumbers(3, 3)); // -1
console.log(compareNumbers(17, 2)); // false