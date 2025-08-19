// array 1 dimenasi
console.log("array 1 dimensi")
let buah = ["apel","jeruk","mangga","semangka"]
console.log(buah[2])
console.log("")
console.log("array object")
//array object
let mobil = [
    {merk :"toyota",warna:"putih",tipe:"sedan"},
    {merk :"BMW",warna:"merah",tipe:"sport"},
    {merk :"Huso",warna:"abu-abu",tipe:"truk"}
];

console.log(mobil[0].merk)
console.log(mobil[0].warna)
console.log("")

//panjang array
console.log("panjang array buah")
console.log(buah.length)
console.log("")

//foreach array 1 dimensi
buah.forEach(function(namabuah,index){
    index = index + 1 
    console.log("buah ke - " + index + ": "+ namabuah)
})
console.log("")

//foreach object
mobil.forEach(function(item,i){
    console.log(`mobile ke- ${i +1}`)
    console.log("merk :" + item.merk)
    console.log("warna :" + item.warna)
    console.log("tipe :" + item.tipe)
    console.log("")
})

//map array
console.log("array map")
let arraywarna = mobil.map(function(item){
    return item.warna
})
console.log(arraywarna)
console.log("")

//filter
console.log("array filter")
let arraymobilfilter = mobil.filter(function(item){
    return item.tipe != "sport"
})
console.log(arraymobilfilter)