const containerEle = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEle = document.createElement("div");
    colorContainerEle.classList.add("color-container");
    containerEle.appendChild(colorContainerEle);
}

// randomColor();

const colorContainerEle = document.querySelectorAll(".color-container");

generateColor();

function generateColor(){
    colorContainerEle.forEach((colorContainerEle)=>{
        const newColorCode =  randomColor();
        // console.log(newColorCode);
        colorContainerEle.style.backgroundColor = "#" + newColorCode;
        colorContainerEle.innerText = "#" + newColorCode;
    })
}

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLenght = 6;
    let colorCode ="";
    for (let index = 0; index < colorCodeLenght; index++) {
        const randomlEle = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomlEle,randomlEle+1);
    }
    return colorCode;
}