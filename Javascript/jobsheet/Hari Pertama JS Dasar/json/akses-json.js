const fs = require('fs')


const teks = fs.readFileSync("data.json","utf-8")
const data =JSON.parse(teks)

console.log("isi awal : ", data)
// menulis data baru ke data.json
data.push({id : 1, nama :'jeremy', usia : 28})

// menyimpan(menulis ulang)
fs.writeFileSync("data.json", JSON.stringify(data, null, 2))
console.log("data berhasil dimasukan")
