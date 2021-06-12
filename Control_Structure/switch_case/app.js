let status = 1;//0=turn off light,1=turn on light
let light;
// if(status==0){
//     light  = "Turn off light"
// }else if (status == 1){
//     light = "Turn on light"
// }else{
//     light = "Not found data"
// }

switch(status){
    case 0 : light  = "Turn off light"
    break;
    case 1 : light = "Turn on light"
    break;
    default : light = "Not found data"

}
console.log(light);