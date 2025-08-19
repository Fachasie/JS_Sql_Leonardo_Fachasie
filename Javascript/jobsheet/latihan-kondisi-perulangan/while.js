let ulang = true

do{
    let i = 1

    console.group("Menampilkan bilangan genap dari 1 sampai 20")
    while(i<=20) {
        if(i%2 === 1){
        console.log(i);
        }
         i++
    }
  
    //ubang ulang jadi false agar tidak mengulang lagi
ulang = false
} while(ulang)