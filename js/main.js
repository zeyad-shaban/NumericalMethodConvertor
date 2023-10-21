// values for testing purpposes
let expression = "x^3+2x^2+x-1 + E^5";
let x1 = 0;
let x2 = 1;
let preErr = 0.0001;
let maxItter = 100;
let method = "bisection";
let xroot;



let dataForm = document.querySelector("#dataForm");
dataForm.onsubmit = dataSubmitted

// for testing purpose
xroot = falsePosition(expression, x1, x2, preErr, maxItter);
