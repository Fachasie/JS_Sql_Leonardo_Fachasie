function hitungluaspersegi(sisi){
    return sisi * sisi
}
function hitungluaspersegipanjang(panjang,lebar){
    return panjang * lebar
}
function hitungluaslingkaran(jari){
    return jari * jari * 3.14
}
function hitungluassegitiga(alas,tinggi){
    return alas * tinggi / 2
}
function hitungkelilingpersegi(sisisegi){
    return sisisegi * 4
}
function hitungkelilingpersegipanjang(kpanjang,klebar){
    return 2 * (kpanjang+klebar)
}
function hitungkelilinglingkaran(kjari){
    return 2 * kjari * 3.14
}
function hiutungkelilingsegitiga(kalas,ktinggi,ksisi){
    return kalas+ktinggi+ksisi
}
let luaspersegi = hitungluaspersegi(8)
let luaspersegipanjang = hitungluaspersegipanjang(9,3)
let luaslingkaran = hitungluaslingkaran(6)
let luassegitiga = hitungluassegitiga(6,4)
let kelilingpersegi = hitungkelilingpersegi(8)
let kelilingpersegipanjang = hitungkelilingpersegipanjang(9,3)
let kelilinglingkaran = hitungkelilinglingkaran(6)
let kelilingsegitiga = hiutungkelilingsegitiga(6,4,6)

console.log(">> Luas Bangun Datar <<")
console.log(`Luas Persegi dengan sisi 8 adalah ${luaspersegi}`)
console.log(`Luas Persegi panjang 9 dan lebar 3 adalah ${luaspersegipanjang}`)
console.log(`Luas Persegi Jari-jari 6 adalah ${luaslingkaran}`)
console.log(`Luas segitiga dengan alas 6 dan tinggi 4 adalah ${luassegitiga}`)
console.log(``)
console.log(">> Keliling Bangun Datar <<")
console.log(`Keliling Persegi dengan sisi 8 adalah ${kelilingpersegi}`)
console.log(`Keliling Persegi Panjang dengan panjang 9 dan lebar 3 adalah ${kelilingpersegi}`)
console.log(`Keliling lingkaran dengan jari-jari 6 adalah ${kelilinglingkaran}`)
console.log(`Keliling Segitiga dengan alas 6, tinggi 4, dan sisi 6 adalah ${kelilingsegitiga}`)