// Random Background color.
let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    let colors =["red","blue","green","pink","black","Maroon","burgundy"];

    let randomColor = 
    colors[Math.floor(Math.random()*colors.length)];

    document.body.style.backgroundColor = randomColor;
});

