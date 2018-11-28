function complexConversion (text) {
    // Your code here
    var data = text.split(',')
    var result = [];
    var obj = {
        name:'',
        gender:'',
        age:'',
        email:'',
        city:'',
        province:''
    }
    for(var i = 0; i < data.length; i++){
        var x = data[i].split(':')
        result.push(x)
        for(var j = 0; j < result.length; j++){
            if(result[i][0] === 'name'){
                obj.name = result[i][1]
            }if(result[i][0] === 'gender'){
                obj.gender = result[i][1]
            }if(result[i][0] === 'age'){
                obj.age = result[i][1]
            }if(result[i][0] === 'email'){
                obj.email = result[i][1]
            }if(result[i][0] === 'city'){
                obj.city = result[i][1]
            }if(result[i][0] === 'province'){
                obj.province = result[i][1]
            }
        }
    }
    if(obj.name === ''){
        delete obj.name
    }if(obj.gender === ''){
        delete obj.gender
    }if(obj.age === ''){
        delete obj.age
    }if(obj.email === ''){
        delete obj.email
    }if(obj.city === ''){
        delete obj.city
    }if(obj.province === ''){
        delete obj.province
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