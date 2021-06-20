//node = element on html

//add item
// const menu = document.getElementById('menu');
// let count = 1;
// function addItem(){
//     const item = document.createElement('li');//create li
//     item.innerText = "item "+(count++);
//     menu.appendChild(item);
// }


//delete item
const menu = document.getElementById('menu');
const item = document.getElementById('item3');
const itemB = document.getElementById('item2');

const newItem = document.createElement("li");
newItem.innerText = "X";

function dleteItem(){
    
    menu.removeChild(item);
}

//replace

function replaceItem() {
    menu.replaceChild(newItem,itemB);
}

