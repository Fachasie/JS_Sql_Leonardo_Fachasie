let nasgor = 25000
let miegor = 22000
let capcay = 32000
let total
let bayar = 100000
const diskon = 0.1
const persen = diskon.toLocaleString(`en-US`, { style: `percent`}) // membuat angka decimal menjadi persen


total = (nasgor + miegor + capcay)
let hargadiskon = (total-(total*diskon))
console.log("Harga Nasi Goreng      = Rp.",nasgor)
console.log("Harga Mie Goreng       = Rp.",miegor)
console.log("Harga Capcay           = Rp.",capcay)
console.log("Harga Total            = Rp.",total)
console.log("Diskon                 =",persen)
console.log("Harga setelah diskon   =",hargadiskon)
console.log("Pembayaran             = Rp.",bayar)
console.log("Kembalian              = Rp.",bayar-hargadiskon)