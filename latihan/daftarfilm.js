const fs = require("fs")
const filePath = "film.json"

let daftarfilm=[
    {judul:"Agak Laen", tahun:"2024", genre:"Horror, Komedi"},
    {judul:"Habibie Dan Ainun", tahun:"2012", genre:"Drama, Romantis"},
    {judul:"Dilan 1990", tahun:"2018", genre:"Romantis"}
]
console.log("Daftar Film :")
daftarfilm.forEach(function(item,i){
console.log(`${i+1}. ${item.judul} (${item.tahun}) - ${item.genre}`)
})

fs.writeFileSync("film.json", JSON.stringify(daftarfilm,null,2))
console.log("Data Siswa berhasil ditulis ke file siswa.json")