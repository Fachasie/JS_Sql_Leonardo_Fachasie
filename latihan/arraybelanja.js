let sepatu=[
    {nama:"New Balance NB 530", harga:390000},
    {nama:"Nike Vomero 5", harga:350000},
    {nama:"Adidas Samba", harga:180000},
    {nama:"Onitsuka Tiger Mexico", harga:420000}
]
console.log("==== Rincian Belanja Sepatu ====")
sepatu.forEach(function(item,i){
console.log(`${i+1}. ${item.nama} - Rp.${item.harga}`)
})
console.log('')
total=(sepatu.reduce((n,{harga})=> n+ harga,0))
console.log(`Total Belanja  = Rp.${total}`)
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
let bayar = 1200000
console.log("Diskon         =",persen)
console.log("Harga setelah diskon   = Rp.",hargadiskon)
console.log("Pembayaran             = Rp.",bayar)
console.log("Kembalian              = Rp.",bayar-hargadiskon)
