function updateVowels(text){
    var vowels = ['a','i','u','e','o'];
    var change = ['b','j','v','f','p'];
    var upvowels = ['A', 'I', 'U', 'E', 'O']
    var upchange = ['B', 'J', 'V', 'F', 'P']
    var updated = [];
  
    for(var i = 0; i < text.length; i++){
        updated.push(text[i])
        //console.log(text[i])
        for(var j = 0; j < vowels.length; j++){
            if (text[i] === vowels[j]) {
                updated.splice(i,1, change[j])
            } 
            if (text[i] === upvowels[j]) {
                updated.splice(i,1, upchange[j])
            }
        }
    }
    return updated.join('')
}

console.log(updateVowels('The vowels are a i u e o || A I U E O'))