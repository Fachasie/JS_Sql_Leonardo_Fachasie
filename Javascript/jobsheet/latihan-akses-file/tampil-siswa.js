const fs = require("fs")

let data = fs.readFileSync("siswa.json", "utf-8")
let siswaarray = JSON.parse(data)

console.log("=== Data Seluruh Siswa ===")
siswaarray.forEach((siswa,i) => {
    console.log(`${i+1}. Nama : ${siswa.nama}`)
    console.log(`   Kelas : ${siswa.kelas}`)
    console.log(`   Nilai : ${siswa.nilai.join(", ")}`)
});