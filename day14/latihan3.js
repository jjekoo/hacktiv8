function sortByCharacter (text) {
    // Your code here
    var alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var upalph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    var result = [];
    for(var i = 0; i < alph.length; i++){
        for(var j = 0; j< text.length; j++){
            if ( alph[i] === text[j]){
                result.push(text[j])
            } if ( upalph[i] === text[j]){
                result.push(text[j])
            } 
        }
    }
    return result.join('')
}
  
// TEST CASES
console.log(sortByCharacter('Hello')); // 'eHllo'
console.log(sortByCharacter('Truncate')); // 'acenrTtu'
console.log(sortByCharacter('Developer')); // 'Deeeloprv'
console.log(sortByCharacter('Software')); // 'aeforStw'
console.log(sortByCharacter('Aegis')); // 'Aegis'
console.log(sortByCharacter('Nama saya Jeko')) // aaaaeJkmNosy