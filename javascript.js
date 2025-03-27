let calculator = document.querySelector(".calculator");
let display    = document.querySelector(".display");
let buttons    = document.querySelector(".buttons");
let button     = document.querySelectorAll(".button");


let arr      = Array.from(button);
let str      = "";

button.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if(button.innerText === "="){
            str     =  eval(str);
            display.innerText =  str;
        }
        else if(button.innerText === "AC"){
            str = "";
            console.log(display.innerText = str);
        }
        else {        
            str     += button.innerText;
            display.innerText =  str;
            console.log(display.innerText);
        }
    });
})
