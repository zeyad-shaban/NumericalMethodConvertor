let expression = "x^3";
let x1 = -1;
let x2 = 2;
let preErr = 0.0001;
let maxItter = 100;
let method = "bisection";
let xroot;
let errHolder = document.querySelector("#errHolder");


let alertErr = msg => {
    errHolder.classList.remove("d-none");
    errHolder.innerHTML = msg;
};

document.querySelector("#dataForm").onsubmit = e => {
    e.preventDefault();
    errHolder.classList.add("d-none");
    document.querySelector("#itterBody").innerHTML = '';
    document.querySelector("#xroot").innerHTML = `X Root will appear here, fix the errors first`;


    expression = document.querySelector("#expression").value;
    x1 = parseFloat(document.querySelector("#x1").value);
    x2 = parseFloat(document.querySelector("#x2").value);
    preErr = parseFloat(document.querySelector("#preErr").value || preErr);
    maxItter = parseFloat(document.querySelector("#maxItter").value || maxItter);
    method = document.querySelector("#method").value;

    try {
        if (method == 'bisection') xroot = bisection(expression, x1, x2, preErr, maxItter);
        if (method == 'falsePosition') xroot = falsePosition(expression, x1, x2, preErr, maxItter);
        if (method == 'secant') xroot = secant(expression, x1, x2, preErr, maxItter);
        if (method == 'newton') xroot = newton(expression, x1, x2, preErr, maxItter);

        drawFunc(expression.toLowerCase().replace(/e/g, Math.E));
    } catch (error) {
        console.log(error);
        return alertErr("Invalid Syntax for F(x)");
    }

    if (isNaN(parseFloat(xroot))) alertErr(xroot);
    else document.querySelector("#xroot").innerHTML = `Xroot = ${xroot}`;
};

newton(expression, x1, x2, preErr, maxItter)