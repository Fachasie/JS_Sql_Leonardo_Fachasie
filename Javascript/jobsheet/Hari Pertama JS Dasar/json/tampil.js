const fs = require('fs')

const isifile = fs.readFileSync("data.json","utf-8")
const data = JSON.parse(isifile)

console.log("isi data.json: ",data)
data.forEach((item) => {
    console.log(`ID ${item.id },
        Nama : ${item.nama},
        Usia : ${item.usia}`)
    
})