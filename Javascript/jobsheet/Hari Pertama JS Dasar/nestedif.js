let minimarket = "Open"
let telur="ada"
let buah="soldout"
if(minimarket.toLowerCase() == "open"){
    console.log("saya akan beli telur dan buah")
    if(telur == "soldout" && buah == "soldout"){
        console.log("tidak belanja semua habis");
    }else if(telur == "soldout"){
        console.log("telur habis")
    }else if(buah == "soldout"){
        console.log("buah habis")
    }
}else{
    console.log("minimarket tutup, saya pulang")
}