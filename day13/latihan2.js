function reverseText(text){
    var updated = [];
    var i = text.length;
    for(i; i >= 0; i--){
        if (text[i] !== ' '){
            updated.push(text[i])
        }
    }
    return updated.join('')
}

console.log(reverseText("Nama saya jeko")) // okej ayas amaN