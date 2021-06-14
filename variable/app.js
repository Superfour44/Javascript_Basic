let name;// ยังไม่กำหนดค่า
name = "hello"
let age = 20;

const tax = 0.07;
// console.log(name);
// console.log(tax);
document.write(name)
// console.log("age:",age);


//global variable
let a = 100;

function display() {
    let b = 50;
    let a = 20;
    console.log("A value in fnc =",a)
    console.log("b value in fnc =",b)
}

console.log("A value not in fnc =",a)
display();
