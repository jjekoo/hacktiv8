function deleteUndefinedKeys (object) {
    // Your code here
    if(object.name === undefined){
        delete object.name
    }
    if(object.age === undefined){
        delete object.age
    }
    if(object.email === undefined){
        delete object.email
    }
    return object
}

  
console.log(deleteUndefinedKeys({
    name: 'Dimitri',
    age: undefined,
    email: 'dimitri@mail.com'
}));
// { name: 'Dimitri', email: 'dimitri@mail.com' }
  
console.log(deleteUndefinedKeys({
    name: undefined,
    age: undefined,
    email: undefined
}));
// {}

//CARA KEDUA

function deleteUndefinedKeys (object) {
    // Your code here
    var values = Object.values(object)
    var keys = Object.keys(object)

    for(var i = 0; i < values.length; i++){
        if(values[i] === undefined){
            delete object[keys[i]]
        }
    }
    return object
}

  
console.log(deleteUndefinedKeys({
    name: 'Dimitri',
    age: undefined,
    email: 'dimitri@mail.com'
}));
// { name: 'Dimitri', email: 'dimitri@mail.com' }
  
console.log(deleteUndefinedKeys({
    name: undefined,
    age: undefined,
    email: undefined
}));
// {}