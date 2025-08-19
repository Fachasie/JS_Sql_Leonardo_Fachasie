let input = "llima" // ubah menajdi 5

try{
    let angka = parseInt(input)

    if(isNaN(angka)){
        throw new Error("input harus berupa angka!")
    }

    console.log("Kuadrat :", angka * angka)
} catch(e) {
    console.error("terjadi kesalahan :", e.message)
}