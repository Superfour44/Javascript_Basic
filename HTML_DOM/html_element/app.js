let tag_p = document.getElementById("demo");
let b = document.querySelector('.myjs');
let c = document.querySelector('p');

console.log(b);
console.log(c);
let x = 10;
let y = 20;

function displayText() {
    tag_p.innerHTML = "show data from parameter x :"+x+" & y "+y;
    // tag_p.innerHTML = "<strong>Learn javascript<strong>"//change html & text
    // tag_p.innerText = "Learn javascript"//change text only
}

