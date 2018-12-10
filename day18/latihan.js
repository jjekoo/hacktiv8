function numberIterator(num) {
    // Your code here
    var result = [];
    for(var i = 0; i <= num; i++){
        result.push(i)
    }
    return result.join('')
   }
   
   // TEST CASES
   console.log(numberIterator(5)); // '012345'
   console.log(numberIterator(7)); // '01234567'
   console.log(numberIterator(3)); // '0123'
   console.log(numberIterator(1)); // '01'
   console.log(numberIterator(0)); // '0'

   function countLetters (word, letter) {
    // Your code here
    var result = 0;
    for(var i = 0; i < word.length; i++){
        //console.log(word[i])
        if(word[i] === letter){
            result++
            }
        }
    return result
  }
  
  // TEST CASES
  console.log(countLetters('12104123', '1'));  // 3
  console.log(countLetters('the quick brown fox', 'o')); // 2
  console.log(countLetters('lorem ipsum', 'a')); // 0
  console.log(countLetters('hahaha', 'h')); // 3