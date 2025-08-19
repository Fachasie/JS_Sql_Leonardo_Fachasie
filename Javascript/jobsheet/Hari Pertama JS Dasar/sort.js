// urutan alfabetik dengan sort
console.log("urut alfabetical")
let nama = ["emily",'rinda','leo','faisal','fany','vany']
nama.sort()
console.log(nama)
console.log("")

//urut descending
console.log("urut angka")
let angkadesc = [20,40,100,200,5,3,29]
angkadesc.sort(function(a,b){
    return a-b
})
console.log(angkadesc)
console.log("")

//urut uboject
console.log("urut ojbect")
let siswa=[
    {nama:"ali",nilai :75},
    {nama:"rio",nilai :30},
    {nama:"gofar",nilai :50}
]
siswa.sort((a,b) => b.nilai - a.nilai)

console.log(siswa)


