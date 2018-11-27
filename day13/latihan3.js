function updateVowels(text){
    var vowels = ['a','i','u','e','o'], change = ['b','j','v','f','p'];
    var upvowels = ['A', 'I', 'U', 'E', 'O'], upchange = ['B', 'J', 'V', 'F', 'P']
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

console.log(updateVowels('The vowels are a i u e o || A I U E O')) // Thf vpwfls brf b j v f p || B J V F P

// Cara kedua

function updateVowels(text){
    var result = text.split('');
    for(var i = 0; i < result.length; i++){
        if(text[i] === 'a'){
            result.splice(i,1, 'b')
        } if(result[i] === 'i'){
            result.splice(i,1, 'j')
        } if(result[i] === 'u'){
            result.splice(i,1, 'v')
        } if(result[i] === 'e'){
            result.splice(i,1, 'f')
        } if(result[i] === 'o'){
            result.splice(i,1, 'p')
        } if(text[i] === 'A'){
            result.splice(i,1, 'B')
        } if(result[i] === 'I'){
            result.splice(i,1, 'J')
        } if(result[i] === 'U'){
            result.splice(i,1, 'V')
        } if(result[i] === 'E'){
            result.splice(i,1, 'F')
        } if(result[i] === 'O'){
            result.splice(i,1, 'P')
        }
    }
    return result.join('')
}

console.log(updateVowels('The vowels are a i u e o || A I U E O')); //Thf vpwfls brf b j v f p || B J V F P