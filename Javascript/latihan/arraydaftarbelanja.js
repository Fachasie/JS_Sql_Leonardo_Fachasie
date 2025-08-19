daftarbelanja=[]
daftarbelanja.push("Beras")
daftarbelanja.push("Minyak")
daftarbelanja.push("Gula")
daftarbelanja.push("Sayur")
daftarbelanja.push("Telur")
daftarbelanja.push("Buah")
console.log("array sebelum dihapus")
daftarbelanja.forEach(function(item,i){
    console.log(`${i+1}. ${item}`)
})
console.log(`Minyak ada pada index ke - ${daftarbelanja.indexOf("Minyak")}`)
console.log("kita hapus menggunakan splice (1,1) index 1, 1 barang")
daftarbelanja.splice(1,1)

console.log("array setelah dihapus")
daftarbelanja.forEach(function(item,i){
    console.log(`${i+1}. ${item}`)
});