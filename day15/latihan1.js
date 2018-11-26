//Diberikan sebuah function yang menerima satu parameter berupa string. 
//Function tersebut mengembalikan nilai true jika di dalam string tersebut 
//terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. 
//Jika tidak ditemukan sama sekali, kembalikan nilai false.

function threeStepsAB (text) {
    // Your code here
    var cond = false;
    var count = 3;

    for(var i = 0; i < text.length; i++){
        if(text[i] === 'a'){
            for(var j = i; j <= count; j++){
                if(text[j] === ' '){
                    count++;
                }
                if(text[j] === 'b'){
                    cond = true;
                } 
            }
        }
    }
    return cond
}
  
  // TEST CASES
console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // true
console.log(threeStepsAB('bacon and meat')); // false