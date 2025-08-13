//fungsi luas
function hitungluas(sisi){
    return sisi * sisi
}
//fungsi keliling
function hitungkeliling(sisi){
    return 4 * sisi
}

//fungsi utama untuk melihatkan hasil
function tampilkanpersegi(sisi){
    console.log("=========== Persegi ===========")
    console.log("Sisi               :",sisi)
    console.log("Luas Persegi       :",hitungluas(sisi))
    console.log("Keliling Persegi   :", hitungkeliling(sisi))
}

//pemanggilan fungsi
tampilkanpersegi(7)
tampilkanpersegi(23)