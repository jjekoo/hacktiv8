function csvToObject (text) {
    // Your code here
    var arr = text.split(',')
    var obj = {
        name:'',
        email:'',
        gender:''
    }
    for(var i = 0; i < arr.length; i++){
        if(i === 0){
            obj.name = arr[i]
        }
        if(i === 1){
            obj.email = arr[i]
        }
        if(i === 2){
            obj.gender = arr[i]
        }
    }
    return obj
  }
  
  // TEST CASES
  console.log(csvToObject('Dimitri,dimitri@mail.com,male'));
  // { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' }
  
  console.log(csvToObject('Icha,icha@mail.com,female'));
  // { name: 'Icha', email: 'icha@mail.com', gender: 'female' }
  
  console.log(csvToObject('Dhani,dhani@mail.com,male'));
  // { name: 'Dhani', email: 'dhani@mail.com', gender: 'male' }