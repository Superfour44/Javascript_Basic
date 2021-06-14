function print_hello_world(){
    console.log("Hello world");
}
// print_hello_world();
function message(){
    alert("Alert Meassage");
}

function display_name(){
    document.write("Superfour");
}

//argument = parameter is send
//parameter = parameter is receive 


function show_number(x){
    console.log("number is:",x);
}

function fullname(fname,lname){
    console.log("First Name:",fname,"Last Name:",lname)
}
// let number = 40;
// show_number(number);
// fullname("Four","Super")


//function have return value


function getComputerIP(){
    return "127.0.0.1";
}

function getMyAddress(){
    let city = "Bankok"
    return city;
}
// let myIP = getComputerIP();
// console.log("IP :",myIP);
// console.log(getMyAddress());


function setSalary(salary){
    let bonus = 1000;
    return salary += bonus
}

let Man1 = setSalary(15000);
let Man2 = setSalary(17000);
console.log("Salary Man1:",Man1);
console.log("Salary Man2:",Man2);