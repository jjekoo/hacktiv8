function removeSpace(text){
    var updated = [];
    var i = 0;
    for(i; i < text.length; i++){
        if(text[i] !== " "){
            updated.push(text[i])
        }
    }
    return updated.join('')
}

console.log(removeSpace("Nama saya jeko")) // Namasayajeko