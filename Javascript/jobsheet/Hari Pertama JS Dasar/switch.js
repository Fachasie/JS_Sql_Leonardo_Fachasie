let day;
switch(new Date().getDay()){
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "monday";
        break;
    case 2:
        day = "selasa";
        break;
    case 3:
        day = "rabu";
        break;
    case 4:
        day = "kamis";
        break;
    case 5:
        day = "jum'at";
        break;
    case 6:
        day = "sabtu";
        break;
    default :
    day = "tidak tahu hari";
}
console.log("hari ini adalah hari : " + day);

let sekarang = new Date().getDay();
console.log(sekarang);
