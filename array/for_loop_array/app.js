let color = ["red","white","blue","yellow","purple"]
color.push("black");
let count = color.length;
// console.log(count);

//for loop
// for (let i = 0;i<count;i++){
//     console.log("member of array:",(i+1),color[i])
// }

//for each
color.forEach(getColor);//arrayname.forEach(FunctionName);

function getColor(colorname) {
    console.log("color is :",colorname);
}