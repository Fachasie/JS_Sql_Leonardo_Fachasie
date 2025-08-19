//array awal berisi nilai siswa

let nilai=[75,88,92]
console.log("1. Nilai Aawal :")
nilai.forEach((n,i) => {
    console.log(`Siswa ${i+1} : ${n}`)
})
console.log("")

//menambahkan nilai menggunakan push
nilai.push(60)
console.log("2> Setelah nilai 60 ditambahkan (push)")
console.log(nilai)
console.log("")

//menghapus nilai menggunakan pop
let nilaiterakhir= nilai.pop()
console.log("3. Setelah menghapus nilai terakhir (pop)", nilaiterakhir)
console.log("Nilai Sekarang", nilai)
console.log("")

//menggunakan map untuk menambahkan bonus 5 point ke semua nilai
let nilaibonus = nilai.map((n) => n+5)
console.log("4. Nilai setelah ditambahkan bonus 5 poin")
    console.log(nilaibonus)
    console.log("")

    // menampilkan nilai bonus dengan foreach
console.log("5. Cetak nilai akhir siswa")
nilaibonus.forEach((n,i) => {
    console.log(`Siswa ${i+1} : ${n}`)
})