// const tag_p = document.getElementById("demo");
// const b = document.querySelector('.myjs');

const title = document.getElementById('title');
const contentEl = document.querySelector('.content');
const allEl = document.querySelectorAll('p');
const box = document.querySelector('.box')

console.log(allEl);
// let x = 10;
// let y = 20;

// function displayText() {

//     box.setAttribute('class','dark');
//     // title.style.color="red";
//     // title.style.backgroundColor="yellow";
//     // title.style.fontSize="60px";
//     // contentEl.setAttribute('class','ChangeNameClass');
//     // tag_p.innerHTML = "show data from parameter x :"+x+" & y "+y;
//     // tag_p.innerHTML = "<strong>Learn javascript<strong>"//change html & text
//     // tag_p.innerText = "Learn javascript"//change text only
// }

function LightMode(){
    box.setAttribute('class','light');
}
function NightMode(){
    box.setAttribute('class','dark');
}

