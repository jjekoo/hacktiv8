STORE "kecepatan" to 20
STORE "penumpang" to 0

IF "penumpang" > 2
  MIN "kecepatan" by 5

ELSE IF "penumpang" = 4
  MIN "kecepatan" by 7

ELSE
  MIN "kecepatan" by 2
  
DISPLAY "kecepatan"