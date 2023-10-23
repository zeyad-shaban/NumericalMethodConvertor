let expression = "cos(x) + 2sin(x) + x^2"
let x1 = 0;
let x2 = -0.1;
let preErr = 0.001;
let maxItter = 100;
let method = "secant";
let xroot;



let dataForm = document.querySelector("#dataForm");
dataForm.onsubmit = dataSubmittedHandler

// for testing purpose
// xroot = falsePosition(expression, x1, x2, preErr, maxItter);
// xroot = secant(expression, x1, x2, preErr, maxItter);
// xroot = bisection(expression, x1, x2, preErr, maxItter)