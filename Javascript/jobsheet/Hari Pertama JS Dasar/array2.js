//menambah elemen di akhir array menggunaka push
console.log("menambah elemen")
let buah = ["manga","jeruk"]
console.log("sebelum ditambah " + buah)
buah.push("apel")
console.log("setelah ditambah " + buah)
console.log("")

//menghapus elemen di akhir array menggunakan pop
console.log("menghapus elemen")
buah.pop()
console.log("setelah dikurang " + buah)
console.log("")

//menambah elemen di awal menggunakan unshift
console.log("menambah elemen di awal")
let buah1 = ["manga","jeruk"]
console.log("sebelum ditambah " + buah1)
buah1.unshift("apel")
console.log("setelah ditambah " + buah1)
console.log("")

//menghapus elemen di awal menggunakan shift
console.log("menghapus elemen")
buah1.shift()
console.log("setelah dikurang di awal " + buah1)
console.log("")

//mbambah elemen di urutan tertentu menggunakan splice
console.log("menambah elemen di urutan tertentu")
let angka= [1,2,4,5]
angka.splice(2,0,3)
console.log(angka)
console.log("")

//menghapus elemen di urutan tertentu menggunakan splice
console.log("hapus elemen di urutan tertentu")
let angka1= [1,2,4,5]
angka.splice(1,2,0)
console.log(angka1)
console.log("")

//mengambil elemen di urutan tertentu menggunakan splice
console.log("mengambil elemen di urutan tertentu")
let angka2= [1,2,4,5]
let potong = angka2.slice(1,2)
console.log(potong)
console.log("")