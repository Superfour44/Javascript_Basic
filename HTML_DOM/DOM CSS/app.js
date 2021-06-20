const box = document.getElementById('box');
let status;

function addDarkMode() {
    box.classList.add("darkmode");//add class in id="box"
}

function removeDarkMode(){
    box.classList.remove("darkmode");//delete class in id="box"
}

function switchDarkMode(){
    box.classList.toggle("darkmode");//switch class in id=box
    status = box.classList.contains("darkmode");
    console.log(status);

    if(status){
        box.style.color="yellow";
    }else{
        box.style.color="red";
    }
}