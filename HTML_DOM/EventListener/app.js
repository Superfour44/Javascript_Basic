const menu = document.getElementById('menu');
const display = document.getElementById('display');
const btn = document.getElementById('btn');

menu.addEventListener('change',getMenu);//event on change
btn.addEventListener('click',showWelCome);//event on click

function getMenu(){
    console.log(menu.value);
    display.innerText = menu.value;
}

function showWelCome(){
    alert("Welcome to webpage");
}