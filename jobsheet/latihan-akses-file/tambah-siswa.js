const fs = require("fs")

const filePath = "siswa.json"
let daftar = []

//cek apakah file sudah ada
if(fs.existsSync(filePath)){
    const content = fs.readFileSync(filePath,"utf8")
    daftar = JSON.parse(content)
}

//data siswa baru
let siswabaru1 = {
    nama: "Sunflower",
    kelas: "Web",
    nilai: [93,97,83]
}

let siswabaru2 = {
    nama: "Magnolia",
    kelas: "AI Konten",
    nilai: [98,77,68]
}

//tambahkan ke array
daftar.push(siswabaru1)
daftar.push(siswabaru2)

// simpan kembali ke file
fs.writeFileSync(filePath,JSON.stringify(daftar, null, 2))
console.log("Data siswa berhasil ditambahkan")