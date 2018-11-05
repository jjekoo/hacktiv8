var name = "jeko";
var age = 15;
var money = 40000;


if (name) {
    if (age < 17) {
        var order = 50000
    } else if (age >= 17) {
        var order = 300000
    } if (money > order) {
      var change = money - order;
        console.log("Anda bisa pesan minum. Sisa uang anda Rp." + change);
    } else {
        console.log("Uang tidak cukup!")
    }
} else {
    console.log("Anda tidak boleh masuk!");
}


