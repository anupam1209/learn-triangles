const sides = document.querySelectorAll(".side-input");
const calculateAreaBtn = document.querySelector("#calculate-btn");
const outputEl = document.querySelector("#output");

function calculateAreaOfTriangle(){
    const areaOfTriangle = 0.5 * (Number(sides[0].value)) * (Number(sides[1].value));
    outputEl.innerText = "The area of triangle is "+ areaOfTriangle;
}

calculateAreaBtn.addEventListener("click", calculateAreaOfTriangle);
