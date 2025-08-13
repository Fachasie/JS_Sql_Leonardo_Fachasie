let headset = 225000
let mouse = 150000
let keyboard = 350000
let total = headset+mouse+keyboard
let bayar = 800000
let diskon
let persen
if(total<250000){
    diskon = 0.0
} else if(total<500000){
    diskon = 0.05
} else if(total<800000){
    diskon = 0.10
} else if(total>=800000){
    diskon = 0.15
} 
persen = diskon.toLocaleString(`en-US`, { style: `percent`}) // membuat angka decimal menjadi persen hanya untuk tulisan
let hargadiskon = (total-(total*diskon))
console.log(`===== Rincian Pembelian =====`)
console.log("headset                = Rp.",headset)
console.log("mouse                  = Rp.",mouse)
console.log("keyboard               = Rp.",keyboard)
console.log('')
console.log("Harga Total            = Rp.",total)
console.log("Diskon                 =",persen)
console.log("Harga setelah diskon   = Rp.",hargadiskon)
console.log("Pembayaran             = Rp.",bayar)
console.log("Kembalian              = Rp.",bayar-hargadiskon)