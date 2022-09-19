const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b){
    const sumOfSquares = (a*a) + (b*b);
    // console.log(sumOfSquares);
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    const lengthOfHypotenuseUptoTwoDigits = lengthOfHypotenuse.toFixed(2);
    outputEl.innerText = "The length of hypotenuse is "+ lengthOfHypotenuseUptoTwoDigits;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
