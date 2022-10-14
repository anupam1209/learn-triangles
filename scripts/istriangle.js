const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
   if (inputs[0].value.length == 0 || inputs[1].value.length == 0 || inputs[2].value.length == 0 || inputs[0].value < 0 || inputs[1].value < 0 || inputs[2].value < 0) {
    outputEl.innerText = "Either you've not filled all the angles or you have entered the negative angles. Please correct it!!";
    return;
  }

    const sumOfAngles = calculateSumOfAngles( Number(inputs[0].value), Number(inputs[1].value),Number(inputs[2].value) );
    if(sumOfAngles === 180){
        // console.log("triangle!!");
        outputEl.innerText = "Yay! The angles form a triangle";
    }else{
        // console.log("not a triangle!!");
        outputEl.innerText = "Oh Oh! The angles don't form a triangle";
    }
}

isTriangleBtn.addEventListener("click", isTriangle);
