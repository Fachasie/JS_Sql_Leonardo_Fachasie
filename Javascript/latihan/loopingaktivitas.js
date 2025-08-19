let a = 1
let texttambah
while(a <=20){
    if(a%2 === 1 && a%3 > 1){
        texttambah ="Apel Pagi"
    }else if(a%2 === 0 && a%3 > 0){
        texttambah = "Mengikuti Pelatihan"
    } else if(a % 3 === 0 && a%2 == 1){
        texttambah = "Mengikuti Uji Kompetensi"
    } else if(a % 3 === 0 && a%2 == 0) {
        texttambah = "Mendapat Sertifikan"
    } 
    console.log(`${a} ${texttambah}`)
    a++
}