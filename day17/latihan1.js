function csvToObject (text) {
    // Your code here
    var arr = text.split(',')
    var obj = {
        name: arr[0],
        email: arr[1],
        gender: arr[2]
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