const fs = require("fs")
const filePath = "film.json"

let daftarfilm=[]
let filmbaru1 = {judul: "Sunflower",tahun: "2014",genre:"romantis"}
let filmbaru2 = {judul:"Agak Laen", tahun:"2024", genre:"Horror, Komedi"}
let filmbaru3 = {judul:"Habibie Dan Ainun", tahun:"2012", genre:"Drama, Romantis"}
let filmbaru4 = {judul:"Dilan 1990", tahun:"2018", genre:"Romantis"}
daftarfilm.push(filmbaru1)
daftarfilm.push(filmbaru2)
daftarfilm.push(filmbaru3)
daftarfilm.push(filmbaru4)
console.log("Daftar Film :")
daftarfilm.forEach(function(item,i){
console.log(`${i+1}. ${item.judul} (${item.tahun}) - ${item.genre}`)
})

fs.writeFileSync("film.json", JSON.stringify(daftarfilm,null,2))
console.log("Data Siswa berhasil ditulis ke file siswa.json")