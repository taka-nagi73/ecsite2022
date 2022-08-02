const states = document.querySelectorAll(".state");
console.log(states);
for(let i=0;i<states.length;i++){
    if(states[i].innerHTML == "true"){
        states[i].innerHTML = "販売中";
    }else{
        states[i].innerHTML = "sold out";
    }
}

const images = document.querySelector(".img");
const imagesall =document.querySelectorAll(".images");
console.log(imagesall[1].src)
imagesall.forEach(element => {
    element.addEventListener("click",function(){
        images.src = element.src;
    })
});