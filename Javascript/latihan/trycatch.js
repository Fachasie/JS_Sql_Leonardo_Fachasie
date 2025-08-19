function bagiangka1(c,d){
    try{
    let angka = parseInt(d)

    if(angka<1){
        throw new Error("tidak bisa dibagi dengan nol")
    } 
    let hasil = c/d
    console.log("Hasil Bagi :", hasil)
} catch(e) {
    console.error("terjadi kesalahan :", e.message)
    
}}
let angka1= 10
let angka2= 2

    try{
        bagiangka1(angka1,angka22)
    } catch(error) {
        console.error(`Terjadi Kesalah lain`,error.message)
    }
    

