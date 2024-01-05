let color = "black";
let click = false;


document.addEventListener("DOMContentLoaded",function(){
    createContainer(32);

    document.querySelector("body").addEventListener("click", function(e){
        if (e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Now you can draw"
            }
            else{
                draw.innerHTML = "you cannot draw";
            }
        }
    })

    let btn4 = document.querySelector("#popup");
    btn4.addEventListener("click", function(){
     let size = getSize();   
     createContainer(size);

    })

})

function createContainer(size){
    let container = document.querySelector(".container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv) 
        container.insertAdjacentElement("beforeend", div);
    }
}



function getSize(){
    let input = prompt("give me a size");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please provide a number";
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "please choice a number between 0 and 100"
    }
    else {
        message.innerHTML = "now you can play"
        return input;
    }
}

function colorDiv(){
    if(click){
       if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%`
       }
       else{
        this.style.backgroundColor = "black";
       }
    } 

}

function setColor(colorChoice){
   color = colorChoice;

}

function resetBoard(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}



