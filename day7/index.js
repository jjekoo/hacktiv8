var name;
var age;
var money;


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

/* CARA KEDUA */

var name;
var age;
var money;
var juice = 50000;
var anggur = 300000;


if (name) {
    if (age < 17) {
        var change = money - juice;
        if (money >= juice) {
          console.log ("Anda bisa pesan minum. Sisa uang anda Rp." + change)
        } else { console.log("uang tidak cukup")
        }
    } else if (age >= 17) {
        var change = money - anggur;
        if (money >= anggur) {
          console.log ("Anda bisa pesan minum. Sisa uang anda Rp." + change)
        } else { console.log("uang tidak cukup")
        }
    }
} else {
    console.log("Anda tidak boleh masuk!");
}