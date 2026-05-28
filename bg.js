// Random Background color.
// let btn = document.querySelector("button");

// btn.addEventListener("click",()=>{
//     let colors =["red","blue","green","pink","black","Maroon","burgundy"];

//     let randomColor = 
//     colors[Math.floor(Math.random()*colors.length)];

//     document.body.style.backgroundColor = randomColor;
// });

// Text change on click.

let heading = document.querySelector("h1");

heading.addEventListener("click",()=>{
    heading.innerText="Ambience Computer education";

    heading.style.color = "#d4af37";

    heading.style.backgroundColor = "#1b2a7a";

    heading.style.border = "3px solid #1b2a7a";

    heading.style.padding = "20px";

    heading.style.borderRadius = "15px";

    heading.style.textAlign = "center";

    heading.style.boxShadow = "0px 0px 20px #1b2a7a";
});