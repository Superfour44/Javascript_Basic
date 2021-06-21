function welcome(){
    alert("Welcome to webpage");
}
function hightlight(obj){
    obj.style.background="yellow";
}

function unhightlight(obj){
    obj.style.background="white"
}

function getMenu(){
    const menu = document.getElementById('menu');
    console.log(menu.value.toUpperCase());
    const display=document.getElementById('display');
    display.innerText = menu.value;
}

function marklink(obj){
    obj.style.background = "blue";
    obj.style.color = "white"
}

function unMarkLink(obj){
    obj.style.background = "white";
    obj.style.color = "purple";
}