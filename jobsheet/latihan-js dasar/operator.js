console.log("Aritmatika")
let a = 150
let b = 40

console.log("Penjumlahan: ",a+b)
console.log("Pengurangann: ",a-b)
console.log("Perkalian:  ",a*b)
console.log("Pembagian: ",a/b)
console.log("Modulus (Sisa Bagi): ",a%b)

//assignment
console.log("Assignment")
let x = 35

x += 5
console.log("x += 5 = ",x)
x -= 2
console.log("x += 2 = ",x)
x *= 3
console.log("x *= 3 = ",x)
x /= 2
console.log("x /= 5 = ",x)

//perbandingan

let c = 10
let d ="10"

console.log("c == d : ", c == d)
console.log("c === d : ", c === d)
console.log("c != d : ", c != d)
console.log("c !== d : ", c !== d)
console.log("c > 5 : ", c > 5)
console.log("c <= 10 : ", c == 10)

//kondisional
let umur = 20
let punyaktp = true

console.log("Boleh buat SIM ? ", umur >= 17 && punyaktp)
console.log("Remaja atau dewasa ? ", umur >= 13 || umur >= 20)
console.log("Bukan anak anak ? ", !(umur < 13))
