function complexConversion (text) {
    // Your code here
    var data = text.split(',') , obj = {};
    for(store of data){
        var arr = store.split(':')
        obj[arr[0]] = arr[1]
    }
    return obj
}

// TEST CASES
console.log(complexConversion('name:Dimitri,email:dimitri@mail.com'));
// { name: 'Dimitri', email: 'dimitri@mail.com' }
  
console.log(complexConversion('name:Erwin,gender:male,age:21'));
// { name: 'Erwin', gender: 'male', age: '21' }
  
console.log(complexConversion('city:Surabaya,province:East Java'));
// { city: 'Surabaya', province: 'East Java' }